import { createSlice, current } from "@reduxjs/toolkit";

const atk = [];

atk.push({
  id: 0,
  name: "1 neutron onager vs leman russ",
  target: { T: 8, Sv: 2, Svv: 7 },
  weapons: [{ id: 10, quantity: 2 }, { id: 55, quantity: 1 }],
  toHit: 3,
});
atk.push({
  id: 1,
  name: "1 ferrumite skorpius vs leman russ",
  target: { T: 8, Sv: 2, Svv: 7 },
  weapons: [{ id: 10, quantity: 3 }, { id: 12, quantity: 1 }, { id: 30, quantity: 1 }],
  toHit: 3,
});
atk.push({
  id: 2,
  name: "2 lascannon ballistarii vs leman russ",
  target: { T: 8, Sv: 2, Svv: 7 },
  weapons: [{ id: 87, quantity: 1 }],
  toHit: 3,
});

export const attacksSlice = createSlice({
  name: 'Attacks',
  initialState: atk,
  reducers: {
    removeAttack: (state, action) => {
      return (current(state).filter(d => d.id !== action.payload));
    },
    addAttack: (state, action) => {
      const maxID = current(state).flatMap(d => d.id).reduce((a, b) => Math.max(a, b), -1);
      const newAttack = action.payload;
      newAttack.id = maxID + 1;
      if (validateAttack(newAttack)) {
        return ([...current(state), newAttack]);
      } else {
        return (current(state));
      }
    }
  },
});


function validateAttack(attack) {
  // assume id to be correct
  // only check existence
  if (!attack.name) {
    console.log("attack validation, no name");
    return (false);
  }
  if (!attack.toHit) {
    console.log("attack validation, no to hit");
    return (false);
  }
  if (!attack.weapons) {
    console.log("attack validation, no weapons");
    return (false);
  } else {
    let v = true;
    attack.weapons.forEach(w => {
      console.log(w.id)
      if (!w.id && w.id !== 0) {
        console.log("attack validation: weapon with no id")
        v = false;
        return (false);
      }
      if (!w.quantity) {
        console.log("attack validation: weapon with no quantity")
        v = false;
        return (false);
      }
    });
    if (!v) { return false; }
  }
  if (!attack.target) {
    console.log("attack validation no target");
    return (false);
  } else {
    if (!attack.target.T) {
      console.log("attack validation, no T");
      return (false);
    }
    if (!attack.target.Sv) {
      console.log("attack validation, no sv");
      return (false);
    }
    if (!attack.target.Svv) {
      console.log("attack validation, no svv");
      return (false);
    }
  }
  console.log("finish")
  return (true);
}

export const selectAttacks = state => state.Attacks;
export const { removeAttack, addAttack } = attacksSlice.actions;
export default attacksSlice.reducer;