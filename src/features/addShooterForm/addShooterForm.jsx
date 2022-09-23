import React from "react";

const AddShooterForm = () => {
  return (
    <div className="group">
      <h4>Attacker</h4>
      <div className="subgroup">
        <div className="subsubgroup">
          <label htmlFor="toHit">To Hit</label>
          <input id="toHit" name="ToHit" type="number"></input>
        </div>
      </div>
    </div>
  )

}

export default AddShooterForm;
