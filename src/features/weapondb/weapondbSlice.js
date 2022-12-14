import { createSlice } from "@reduxjs/toolkit";
const diceDistribution = {
  d3: { name: "1d3", val: [1, 2, 3] },
  d3p3: { name: "1d3+3", val: [4, 5, 6] },
  d6: { name: "1d6", val: [1, 2, 3, 4, 5, 6] },
  d6p2: { name: "1d6+2", val: [3, 4, 5, 6, 7, 8] },
  d6min3: { name: "1d6 min 3", val: [3, 3, 3, 4, 5, 6] },
  d3_3: { name: "3d3", val: [3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 9] },
  d3_2: { name: "2d3", val: [2, 3, 3, 4, 4, 4, 5, 5, 6] },
  d3_2min3: { name: "2d3 min 3", val: [3, 3, 3, 4, 4, 4, 5, 5, 6] },
}



const atkDB = [//added in order so id = line - startline
  { name: 'Arc Pistol', S: 5, B: 1, AP: -2, D: 1 },//0
  { name: 'Arc (vehicle)', S: 5, B: 1, AP: -2, D: 2 },
  { name: 'Arc Rifle', S: 6, B: 1, AP: -2, D: diceDistribution.d3 },
  { name: 'Arc Rifle (half range)', S: 6, B: 2, AP: -2, D: diceDistribution.d3 },
  { name: 'Arc Rifle (vehicle)', S: 6, B: 1, AP: -2, D: 3 },
  { name: 'Arc Rifle (vehicle)(half range)', S: 6, B: 2, AP: -2, D: 3 },//5
  { name: 'Archeo-revolver', S: 5, B: 1, AP: -2, D: 2 },
  { name: 'Belleros Energy Cannon', S: 5, B: diceDistribution.d3_3, AP: -1, D: 2 },
  { name: 'Belleros Energy Cannon (blast)', S: 5, B: 9, AP: -1, D: 2 },
  { name: 'Cognis Flamer', S: 4, B: diceDistribution.d6p2, AP: 0, D: 1 },
  { name: "Cognis Heavy Stubber", S: 4, B: 4, AP: 0, D: 1 },//10
  { name: "Deadalus Missile Launcher", S: 7, B: 1, AP: -3, D: diceDistribution.d6 },
  { name: "Disruptor Missile Launcher", S: 7, B: diceDistribution.d6, AP: -2, D: diceDistribution.d3 },
  { name: "Disruptor Missile Launcher (blast)", S: 7, B: 6, AP: -2, D: diceDistribution.d3 },
  { name: "Disruptor Missile Launcher (half blast)", S: 7, B: diceDistribution.d6min3, AP: -2, D: diceDistribution.d3 },
  { name: "Electrostatic Gauntlets (shooting)", S: 5, B: 3, AP: -1, D: 1 },//15
  { name: "Eradication Beamer Focused", S: 8, B: diceDistribution.d6, AP: -4, D: 3 },
  { name: "Eradication Beamer Focused (blast)", S: 8, B: 6, AP: -4, D: 3 },
  { name: "Eradication Beamer Focused (half blast)", S: 8, B: diceDistribution.d6min3, AP: -4, D: 3 },
  { name: "Eradication Beamer Dissipated", S: 8, B: diceDistribution.d6, AP: -3, D: 2 },
  { name: "Eradication Beamer Dissipated (blast)", S: 8, B: 6, AP: -3, D: 2 },//20
  { name: "Eradication Beamer Dissipated (half blast)", S: 8, B: diceDistribution.d6min3, AP: -3, D: 2 },
  { name: "Eradication Pistol Focused", S: 6, AP: -3, D: 2, B: diceDistribution.d3 },
  { name: "Eradication Pistol Focused (blast)", S: 6, AP: -3, D: 2, B: 3 },
  { name: "Eradication Pistol Dissipated", S: 6, AP: -2, D: 1, B: diceDistribution.d3 },
  { name: "Eradication Pistol Dissipated (blast)", S: 6, AP: -2, D: 1, B: 3 },//25
  { name: "Eradication Ray Focused", S: 6, AP: -3, D: 2, B: diceDistribution.d3 },
  { name: "Eradication Ray Focused (blast)", S: 6, AP: -3, D: 2, B: 3 },
  { name: "Eradication Ray Dissipated", S: 6, AP: -2, D: 1, B: diceDistribution.d3 },
  { name: "Eradication Ray Dissipated (blast)", S: 6, AP: -2, D: 1, B: 3 },
  { name: "Ferrumite Cannon", S: 8, AP: -3, D: 3, B: 3 },
  { name: "Flechette Blaster", S: 3, AP: 0, D: 1, B: 5 },
  { name: "Flechette Carbine", S: 3, AP: 0, D: 1, B: 5 },
  { name: "Galvanic Rifle", S: 4, AP: -1, D: 1, B: 2 },
  { name: "Gamma Pistol", S: 6, AP: -3, D: 3, B: 1 },
  { name: "Gatling Rocket Launcher", S: 6, AP: -2, D: 1, B: 5 },
  { name: "Heavy Arc Rifle", S: 6, AP: -2, D: 2, B: 2 },
  { name: "Heavy Arc Rifle (vehicle)", S: 6, AP: -2, D: 2, B: 3 },
  { name: "Heavy Bolter", S: 5, AP: -1, D: 2, B: 3 },
  { name: "Heavy Grav Cannon", S: 5, AP: -3, D: 1, B: 5 },
  { name: "Heavy Grav Cannon (save)", S: 5, AP: -3, D: 2, B: 5 },
  { name: "Heavy Phosphor Blaster", S: 6, AP: -2, D: 1, B: 3 },
  { name: "Incendine Combustor", S: 5, AP: -2, D: 1, B: diceDistribution.d6 },
  { name: "Kastelan Phosphor Blaster", S: 6, AP: -1, D: 2, B: 3 },
  { name: "Kataphron Plasma Culverin", S: 7, AP: -3, D: 1, B: diceDistribution.d6 },
  { name: "Kataphron Plasma Culverin (half blast)", S: 7, AP: -3, D: 1, B: diceDistribution.d6min3 },
  { name: "Kataphron Plasma Culverin (blast)", S: 7, AP: -3, D: 1, B: 6 },
  { name: "Kataphron Plasma Culverin supercharged", S: 8, AP: -3, D: 2, B: diceDistribution.d6 },
  { name: "Kataphron Plasma Culverin supercharged (half blast)", S: 8, AP: -3, D: 2, B: diceDistribution.d6min3 },
  { name: "Kataphron Plasma Culverin supercharged (blast)", S: 8, AP: -3, D: 2, B: 6 },
  { name: "Macrostubber", S: 4, AP: 0, D: 1, B: 5 },
  { name: "Magnarail Lance", S: 7, AP: -3, D: 3, B: 1 },
  { name: "Mechanicus Pistol", S: 4, AP: -2, D: 1, B: 2 },
  { name: "Multi-melta", S: 8, AP: -4, d: diceDistribution.d6, B: 2 },
  { name: "Multi-melta (half range)", S: 8, AP: -4, d: diceDistribution.d6p2, B: 2 },
  { name: "Neutron Laser", S: 12, AP: -4, D: diceDistribution.d3p3, B: diceDistribution.d3 },
  { name: "Neutron Laser (blast)", S: 12, AP: -4, D: diceDistribution.d3p3, B: 3 },
  { name: "Phosphor Blast Carbine", S: 5, AP: -1, D: 1, B: diceDistribution.d3_2 },
  { name: "Phosphor Blast Carbine (blast)", S: 5, AP: -1, D: 1, B: diceDistribution.d3_2min3 },
  { name: "Phosphor Blast Pistol", S: 5, AP: -1, D: 1, B: diceDistribution.d3 },
  { name: "Phosphor Blast Pistol (blast)", S: 5, AP: -1, D: 1, B: 3 },
  { name: "Phosphor Blaster", S: 5, AP: -1, D: 1, B: 1 },
  { name: "Phosphor Blaster (half range)", S: 5, AP: -1, D: 1, B: 2 },
  { name: "Phosphor Pistol", S: 4, AP: -1, D: 1, B: 1 },
  { name: "Phosphor Serpenta", S: 5, AP: -1, D: 1, B: 1 },
  { name: "Phosphor Torch", S: 4, AP: -1, D: 1, B: diceDistribution.d6 },
  { name: "Plasma Caliver", S: 7, AP: -3, D: 1, B: 2 },
  { name: "Plasma Caliver supercharged", S: 8, AP: -3, D: 2, B: 2 },
  { name: "Plasma Cannon", S: 7, AP: -3, D: 1, B: diceDistribution.d3 },
  { name: "Plasma Cannon (blast)", S: 7, AP: -3, D: 1, B: 3 },
  { name: "Plasma Cannon supercharged", S: 8, AP: -3, D: 2, B: diceDistribution.d3 },
  { name: "Plasma Cannon supercharged (blast)", S: 8, AP: -3, D: 2, B: 3 },
  { name: "Radium Carbine", S: 3, AP: 0, D: 1, B: 3 },
  { name: "Radium Jezzail", S: 5, AP: -2, D: 1, B: 2 },
  { name: "Radium Pistol", S: 3, AP: 0, D: 1, B: 1 },
  { name: "Radium Serpenta", S: 3, AP: 0, D: 1, B: 1 },
  { name: "Solar Atomiser", S: 10, AP: -4, D: 3, B: diceDistribution.d3 },
  { name: "Solar Atomiser (blast)", S: 10, AP: -4, D: 3, B: 3 },
  { name: "Solar Atomiser (half range)", S: 10, AP: -4, D: diceDistribution.d3p3, B: diceDistribution.d3 },
  { name: "Solar Atomiser (half range)(blast)", S: 10, AP: -4, D: diceDistribution.d3p3, B: 3 },
  { name: "Stubcarbine", S: 4, AP: 0, D: 1, B: 3 },
  { name: "Sulphur Breath", S: 4, AP: -2, D: 1, B: diceDistribution.d6 },
  { name: "Torsion Cannon", S: 8, AP: -4, D: diceDistribution.d3p3, B: 1 },
  { name: "Transonic Cannon", S: 4, AP: -1, D: 2, B: diceDistribution.d6 },
  { name: "Transuranic Arquebus", S: 7, AP: -2, D: diceDistribution.d3, B: 1 },
  { name: "Twin Cognis Autocannon", S: 7, AP: -1, D: 2, B: 6 },
  { name: "Twin Cognis Heavy Stubber", S: 4, AP: 0, D: 1, B: 8 },
  { name: "Twin Cognis Lascannon", S: 9, AP: -3, D: diceDistribution.d3p3, B: 2 },
  { name: "Twin Icarus Autocannon", S: 7, AP: -1, D: 2, B: 4 },
  { name: "Twin Onager Heavy Phosphor Blaster", S: 6, AP: -2, D: 2, B: 8 },
  { name: "Volkite Blaster", S: 6, AP: 0, D: 2, B: 3 }
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