import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

export const selectAttacks = state => state.Attacks;
export default attacksSlice.reducer;