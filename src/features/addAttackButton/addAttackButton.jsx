import React from 'react';
import { useDispatch } from 'react-redux';
import { addAttack } from '../attacks/attacksSlice';
import { switchForm } from '../addAttackForm/AttackFormSlice';

const atk_add = {
  name: 'added attack',
  weapons: [{ id: 0, quantity: 39 }, { id: 1, quantity: 100 }],
  target: { T: 5, Sv: 2, Svv: 6 },
  toHit: 2,
}

const AddAttackButton = () => {
  const dispatch = useDispatch();
  const atk = Object.assign({}, atk_add);
  atk.name += Math.random().toString();
  const add = () => {
    dispatch(switchForm());
  };
  return (
    <button
      type="button"
      className="btn btn-primary calc-button"
      onClick={add}
    >
      Add Attack
    </button>
  )

}

export default AddAttackButton;
