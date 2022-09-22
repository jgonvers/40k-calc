import { createSlice } from "@reduxjs/toolkit";


const atkDB = [
  { name: 'heavy stubber', S: 4, B: 4, AP: 0, D: '1' },
  { name: 'lascannon', S: 9, B: 1, AP: -3, D: '1d6' },
];

const WeaponDataBase = {};

// is called multiple time should find a way to do it once
atkDB.forEach((element, index) => {
  WeaponDataBase[index] = element;
});

export const weaponDBSlice = createSlice({
  name: 'WeaponDataBase',
  initialState: atkDB,
  reducers: {},
});

export const selectWeaponDB = state => state.WeaponDataBase;
export { WeaponDataBase };
export default weaponDBSlice.reducer;