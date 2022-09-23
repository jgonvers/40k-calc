import React from "react";
import AddTargetForm from "../addTargetForm/addTargetForm";
import AddWeaponSingle from "../addWeaponSingle/addWeaponSingle";
import AddShooterForm from "../addShooterForm/addShooterForm";
import { addAttack } from "../attacks/attacksSlice";
import { connect } from "react-redux";
import { switchForm } from "./AttackFormSlice";
import "./addAttackForm.scss";

class AddAttackForm extends React.Component {
  constructor() {
    super();
    this.state = { selectedWeapons: [] };
  }
  render() {
    const weaponsDB = this.props.weaponsDB;
    const selectedWeapons = this.state.selectedWeapons;
    const weaponSelectorOptions = weaponsDB.map((weapon, id) => {
      return (<option value={id} key={id}>{weapon.name}</option>)
    })

    const weaponList = selectedWeapons.map(id => {
      return (<AddWeaponSingle id={id} name={weaponsDB[id]["name"]} key={id} />)
    });

    const addWeapon = (e) => {
      const currentWeapons = this.state.selectedWeapons;
      const id = e.target.value;
      if (id === "-1") { return };
      if (currentWeapons.includes(id)) { return };
      this.setState({ selectedWeapons: [...currentWeapons, id] });
    }

    const addAttack = () => {
      const data = new FormData(document.querySelector("#addAttackForm"));
      const attack = { weapons: [], target: {} };
      for (const [key, value] of data.entries()) {
        switch (key) {
          case "name":
            attack.name = value;
            break;
          case "T":
            attack.target.T = value;
            break;
          case "sv":
            attack.target.Sv = value;
            break;
          case "svv":
            attack.target.Svv = value;
            break;
          case "ToHit":
            attack.toHit = value;
            break;
          case "weapon_selector":
            break;
          default:
            if (key.includes("quantity_")) {
              attack.weapons.push({
                id: parseInt(key.match(/\d+/)[0]),
                quantity: value,
              })
            } else { console.log(`key not in switch: ${key}`) }
        }
      }
      this.props.addAttack(attack);
      this.props.switchForm();
    }

    return (
      <div className="attack-form">
        <form id="addAttackForm">
          <div className="subgroup">
            <div className="subsubgroup">
              <label htmlFor="name"><h3>Attack Name</h3></label>
              <input type="text" id="name" name="name"></input>
            </div>
          </div>
          <AddShooterForm />
          <AddTargetForm />
          <div>
            <h3>Weapons</h3>
            <select
              id="weapon_selector"
              name="weapon_selector"
              onChange={addWeapon}
            >
              <option value={-1}>select weapon to add</option>
              {weaponSelectorOptions}
            </select>
            <div className="subgroup">
              {weaponList}
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={addAttack}
          >
            Add Attack
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addAttack, switchForm })(AddAttackForm);
