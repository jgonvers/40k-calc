import React from "react";

const AddWeaponSingle = (props) => {
  const weaponID = props.id;
  const weaponName = props.name;
  return (
    <div className="form-group row">
      <label htmlFor={`quantity_${weaponID}`}>{weaponName}</label>
      <input id={`quantity_${weaponID}`} name={`quantity_${weaponID}`} type="number" min="0"></input>
    </div>
  )
}

export default AddWeaponSingle;