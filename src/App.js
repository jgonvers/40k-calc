import React from 'react';
import './App.css';
import Sidebar from './features/sidebar/sidebar';
import Result from './features/result/result';
import AddAttackForm from './features/addAttackForm/addAttackForm';
import { selectWeaponDB } from "./features/weapondb/weapondbSlice";
import { useSelector } from 'react-redux';
function App() {
  return (
    <div className="App">
      <Result />
      <Sidebar />
      <AddAttackForm weaponsDB={useSelector(selectWeaponDB)} />
    </div>
  );
}

export default App;
