import React from 'react';
import './calcButton.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectAttacks } from '../attacks/attacksSlice';
import { calculate } from '../result/resultSlice';

const CalcButton = () => {
  const dispatch = useDispatch();
  const attacks = useSelector(selectAttacks);

  function calc() {
    dispatch(calculate(attacks));
  }

  return (
    <button
      type="button"
      className="btn btn-primary calc-button"
      onClick={calc}
    >
      Calculate
    </button>
  )
}

export default CalcButton;
