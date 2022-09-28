import React from 'react';
import './calcButton.scss';
import calculator from '../ResultCalculator';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectAttacks } from '../attacks/attacksSlice';
import { changeResult } from '../result/resultSlice';

const CalcButton = (props) => {
  const dispatch = useDispatch();
  const attacks = useSelector(selectAttacks);
  const calculate = () => {
    const loader = document.getElementById("loader")

    loader.className = "";
    const res = {};
    attacks.forEach((attack) => {
      res[attack.name] = calculator(attack);
    });
    dispatch(changeResult(res));
    loader.className = "d-none";
  }
  return (
    <button
      type="button"
      className="btn btn-primary calc-button"
      onClick={calculate}
    >
      Calculate
    </button>
  )
}



export default CalcButton;
