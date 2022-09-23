import React from "react";

const AddShooterForm = () => {
  return (
    <div className="form-group row">
      <h4>Attacker</h4>
      <label htmlFor="toHit">To Hit</label>
      <input id="toHit" name="ToHit" type="number"></input>
    </div>
  )

}

export default AddShooterForm;
