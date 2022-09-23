import React from "react";
import AddTargetForm from "../addTargetForm/addTargetForm";
import AddWeaponSingle from "../addWeaponSingle/addWeaponSingle";
import AddShooterForm from "../addShooterForm/addShooterForm";

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
          case "toHit":
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
            } else { console.log(key) }
        }
      }
      // TODO: add attack to redux
      console.log(attack);
    }

    return (
      <div className="attack-form">
        <form id="addAttackForm">
          <div className="row">
            <label htmlFor="name"><h3>Attack Name</h3></label>
            <input type="text" id="name" name="name"></input>
            <AddShooterForm />
            <AddTargetForm />
            <h3>Weapons</h3>
            <label htmlFor="weapon_selector">Add Weapon</label>
            <select
              id="weapon_selector"
              name="weapon_selector"
              onChange={addWeapon}
            >
              <option value={-1}>select weapon</option>
              {weaponSelectorOptions}
            </select>
          </div>
          {weaponList}
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

export default AddAttackForm;
