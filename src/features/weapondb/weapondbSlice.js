import { createSlice } from "@reduxjs/toolkit";
const damageDistribution = {
  d3p3: [4, 5, 6],
  d6: [1, 2, 3, 4, 5, 6],
  d6min3: [3, 3, 3, 4, 5, 6]
}



const atkDB = [
  { name: 'heavy stubber', S: 4, B: 4, AP: 0, D: 1 },
  { name: 'lascannon', S: 9, B: 1, AP: -3, D: damageDistribution.d6 },
  { name: "really, really, really long-ass name for test, it's a really long name trust me", S: 4, B: 4, AP: 0, D: 1 }
];

const WeaponDataBase = {};

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