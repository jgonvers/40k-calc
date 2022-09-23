import React from "react";

const AddTargetForm = () => {
  return (
    <div className="group">
      <h4>Target</h4>
      <div className="subgroup">
        <div className="subsubgroup">
          <label htmlFor="T">T</label>
          <input id="T" name="T" type="number"></input>
        </div>
        <div className="subsubgroup">
          <label htmlFor="sv">Save</label>
          <input id="sv" name="sv" type="number"></input>
        </div>
        <div className="subsubgroup">
          <label htmlFor="svv">Invuln</label>
          <input id="svv" name="svv" type="number"></input>
        </div>
      </div>
    </div>
  )

}

export default AddTargetForm;
