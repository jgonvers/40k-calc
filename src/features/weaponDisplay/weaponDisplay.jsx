/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectWeaponDB } from '../weapondb/weapondbSlice';
import './weaponDisplay.scss';

const WeaponDisplay = (props) => {
  const WeaponDataBase = useSelector(selectWeaponDB);
  const { id } = props.weapon;
  return (
    <div className="attack-info accordion-body">
      <h4 className="attack-title">
        {props.weapon.quantity} {WeaponDataBase[id].name}
      </h4>
      <div className="weapon-data">
        <div className="weapon-burst">B: {typeof (WeaponDataBase[id].B) === 'number' ? WeaponDataBase[id].B : WeaponDataBase[id].B.name}</div>
        <div className="weapon-strength">S: {WeaponDataBase[id].S}</div>
        <div className="weapon-ap">AP: {WeaponDataBase[id].AP}</div>
        <div className="weapon-damage">D: {typeof (WeaponDataBase[id].D) === 'number' ? WeaponDataBase[id].D : WeaponDataBase[id].D.name}</div>
      </div>
    </div>
  );
}

export default WeaponDisplay;
