/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './attackDisplay.scss';
import WeaponDisplay from '../weaponDisplay/weaponDisplay';
import TargetDisplay from '../targetDisplay/targetDisplay';
import { useDispatch } from 'react-redux';
import { removeAttack } from '../attacks/attacksSlice';

const AttackDisplay = (props) => {
  const dispatch = useDispatch();
  const headerID = `accordion-header${props.atk.id}`;
  const bodyID = `accordion-body${props.atk.id}`;
  const remove = () => {
    dispatch(removeAttack(props.atk.id));
  }
  const listweapons = props.atk.weapons.map(weapon => (
    <WeaponDisplay
      weapon={weapon}
      bodyID={bodyID}
      headerID={headerID}
      key={weapon.id}
    />
  ));
  return (
    <div className="attack-display accordion-item">
      <h2 className="accordion-header" id={headerID}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${bodyID}`}
          aria-expanded="false"
          aria-controls={bodyID}
        >
          <span className='button-content'>
            <span>{props.atk.name}</span>
            <span
              className="remove-attack"
              onClick={remove}
            >X</span>
          </span>
        </button>
      </h2>
      <div
        className="accordion-collapse collapse"
        id={bodyID}
        aria-labelledby={headerID}
        data-bs-parent={`#${headerID}`}
      >
        <div className="to-hit accordion-body">
          To Hit: {props.atk.toHit}+
        </div>
        <TargetDisplay target={props.atk.target} />
        {listweapons}
      </div>
    </div>
  );
}

export default AttackDisplay;
