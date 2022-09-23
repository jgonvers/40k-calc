import React from "react";

const AddTargetForm = () => {
  return (
    <div className="form-group row">
      <h4>Target</h4>
      <label htmlFor="T">T</label>
      <input id="T" name="T" type="number"></input>
      <label htmlFor="sv">Save</label>
      <input id="sv" name="sv" type="number"></input>
      <label htmlFor="svv">Invuln</label>
      <input id="svv" name="svv" type="number"></input>
    </div>
  )

}

export default AddTargetForm;
