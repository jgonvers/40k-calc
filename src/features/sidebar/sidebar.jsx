/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './sidebar.scss';

import AttackDisplay from '../attackDisplay/attackDisplay';
import CalcButton from '../calcButton/calcButton';
import { useSelector } from 'react-redux';
import { selectAttacks } from '../attacks/attacksSlice';
import AddAttackButton from '../addAttackButton/addAttackButton';

const Sidebar = () => {
  const atkList = useSelector(selectAttacks).map(attack => (
    <AttackDisplay atk={attack} key={attack.id} />
  ));
  return (
    <div className="sidebar accordion accordion-flush" id="atk-accordion">
      {atkList}
      <div className='sidebar-button-holder'>
        <CalcButton />
        <AddAttackButton />
      </div>
    </div>
  );
}

export default Sidebar;
