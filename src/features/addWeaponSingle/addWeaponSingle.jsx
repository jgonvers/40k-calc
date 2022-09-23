import React from "react";
import "./addWeaponSingle.scss";

const AddWeaponSingle = (props) => {
  const weaponID = props.id;
  const weaponName = props.name;
  return (
    <div className="subsubgroup">
      <label htmlFor={`quantity_${weaponID}`}>{weaponName}</label>
      <input id={`quantity_${weaponID}`} name={`quantity_${weaponID}`} type="number" min="0"></input>
    </div>
  )
}

export default AddWeaponSingle;