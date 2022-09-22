import { sum } from 'lodash';
import { WeaponDataBase } from './weapondb/weapondbSlice';

function getDice() {
  return Math.floor(Math.random() * 5 + 1);
}

function getNDice(n) {
  let count = 0;
  const result = [0, 0, 0, 0, 0, 0];
  while (count < n) {
    result[getDice() - 1] += 1;
    count += 1;
  }
  return result;
}
// eslint-disable-next-line no-unused-vars
function getToHit(toHit, weapon, target) {
  return toHit;
}

function getToWound(weapon, target) {
  const { S } = WeaponDataBase[weapon.id];
  const { T } = target;
  if (S >= 2 * T) { return 2; }
  if (S > T) { return 3; }
  if (S === T) { return 4; }
  if (2 * S <= T) { return 6; }
  if (S < T) { return 5; }
  return 4;
}
function getSave(weapon, target) {
  const { Sv, Svv } = target;
  const { AP } = WeaponDataBase[weapon.id];
  if (Sv - AP < Svv) { return Sv - AP; }
  return Svv;
}

function damage(D) {
  // TODO
  return 1;
}

function pass(n, toPass) {
  if (toPass > 6) { return 0; }
  return sum(getNDice(n).slice(toPass - 1));
}

function calculator(attack, iteration = 1000) {
  const { weapons, target, toHit } = attack;
  const result = {};
  let iter = iteration;
  while (iter) {
    iter -= 1;
    let d = 0;
    weapons.forEach(weapon => {
      // put outside loop for not doing it every iteration
      const hit = getToHit(toHit, weapon, target);
      const wound = getToWound(weapon, target);
      const save = getSave(weapon, target);

      let n = weapon.quantity * WeaponDataBase[weapon.id].B;

      n = pass(n, hit);
      n = pass(n, wound);
      n -= pass(n, save);
      let i = 0;
      while (i < n) {
        i += 1;
        d += damage(weapon.D);
      }
    });
    if (result[d] === undefined) { result[d] = 1; }
    else { result[d] += 1; }
  }
  let out = [];
  Object.entries(result).forEach(([key, value]) => {
    out.push({ x: key, y: value / iteration });
  });
  out = out.sort((a, b) => a.x - b.x);
  out = out.map((val, index) => ({
    x: val.x,
    y: sum(out.slice(index).map(e => e.y)),
  }));
  return out;
}

export default calculator;
