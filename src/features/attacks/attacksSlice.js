import { createSlice, current } from "@reduxjs/toolkit";

const atk = [
  {
    id: 0,
    name: 'attack 1',
    weapons: [{ id: 0, quantity: 10 }, { id: 1, quantity: 7 }],
    target: { T: 5, Sv: 2, Svv: 6 },
    toHit: 4,
  },
  {
    id: 1,
    name: 'attack 2',
    weapons: [{ id: 0, quantity: 20 }],
    target: { T: 5, Sv: 2, Svv: 6 },
    toHit: 4,
  },
];

export const attacksSlice = createSlice({
  name: 'Attacks',
  initialState: atk,
  reducers: {
    removeAttack: (state, action) => {
      return (current(state).filter(d => d.id !== action.payload));
    },
    addAttack: (state, action) => {
      const maxID = current(state).flatMap(d => d.id).reduce((a, b) => Math.max(a, b), -1);
      console.log(maxID);
      const newAttack = action.payload;
      newAttack.id = maxID + 1;
      return ([...current(state), newAttack]);
    }
  },
});

export const selectAttacks = state => state.Attacks;
export const { removeAttack, addAttack } = attacksSlice.actions;
export default attacksSlice.reducer;