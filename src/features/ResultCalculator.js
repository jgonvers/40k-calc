import { sum } from 'lodash';
import { WeaponDataBase } from './weapondb/weapondbSlice';

const ITERATION = 10 ** 5;

function getDice() {
  return Math.floor(Math.random() * 6 + 1);
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

function getN(D) {
  if (typeof (D) === 'number') { return D; }
  if (typeof (D) === 'object') { return D[Math.floor(Math.random() * D.length)] }
  return 0;
}


function pass(n, toPass) {
  if (toPass > 6) { return 0; }
  return sum(getNDice(n).slice(toPass - 1));
}


async function multiCalc(attacks, iteration = ITERATION) {
  const promise = new Promise((resolve, reject) => {
    const res = {};
    attacks.forEach((attack) => { res[attack.name] = calculator(attack, iteration) })
    resolve(res);
  })
  return (promise);
}

function calculator(attack, iteration = ITERATION) {
  const { target, toHit } = attack;
  const weapons = [];
  attack.weapons.forEach(weapon => {
    weapons.push(Object.assign({}, weapon))
  })
  const result = {};
  for (let i = 0; i < weapons.length; i++) {
    weapons[i].hit = getToHit(toHit, weapons[i], target);
    weapons[i].wound = getToWound(weapons[i], target);
    weapons[i].save = getSave(weapons[i], target);
  }

  for (let iter = 0; iter < iteration; iter++) {
    let d = 0;
    weapons.forEach(weapon => {
      const { hit, wound, save } = weapon;

      let n = weapon.quantity * getN(typeof (WeaponDataBase[weapon.id].B) === 'number' ? WeaponDataBase[weapon.id].B : WeaponDataBase[weapon.id].B.val);
      n = pass(n, hit);
      n = pass(n, wound);
      n -= pass(n, save);
      for (let i = 0; i < n; i++) { d += getN(typeof (WeaponDataBase[weapon.id].D) === 'number' ? WeaponDataBase[weapon.id].D : WeaponDataBase[weapon.id].D.val); }
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

export { multiCalc };
export default calculator;
