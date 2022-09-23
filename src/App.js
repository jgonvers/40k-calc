import React from 'react';
import './App.css';
import Sidebar from './features/sidebar/sidebar';
import Result from './features/result/result';
import AddAttackForm from './features/addAttackForm/addAttackForm';
import { selectWeaponDB } from "./features/weapondb/weapondbSlice";
import { useSelector } from 'react-redux';
import { selectFormState } from './features/addAttackForm/AttackFormSlice';
function App() {
  const formState = useSelector(selectFormState);
  const weaponsDB = useSelector(selectWeaponDB);
  const form = () => {
    if (formState) {
      return (<AddAttackForm weaponsDB={weaponsDB} />);
    }
  }
  return (
    <div className="App">
      <Result />
      <Sidebar />
      {form()}
    </div>
  );
}

export default App;
