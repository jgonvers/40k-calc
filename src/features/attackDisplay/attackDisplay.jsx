/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './attackDisplay.scss';
import WeaponDisplay from '../weaponDisplay/weaponDisplay';
import TargetDisplay from '../targetDisplay/targetDisplay';

class AttackDisplay extends React.Component {
  render() {
    const headerID = `accordion-header${this.props.atk.id}`;
    const bodyID = `accordion-body${this.props.atk.id}`;
    const listweapons = this.props.atk.weapons.map(weapon => (
      <WeaponDisplay
        weapon={weapon}
        bodyID={bodyID}
        headerID={headerID}
        key={weapon.id}
      />
    ));
    return (
      <div className="attack-display accordion-item">
        <h2 className="accordion-header" id={headerID}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${bodyID}`}
            aria-expanded="false"
            aria-controls={bodyID}
          >
            {this.props.atk.name}
          </button>
        </h2>
        <div
          className="accordion-collapse collapse"
          id={bodyID}
          aria-labelledby={headerID}
          data-bs-parent={`#${headerID}`}
        >
          <div className="to-hit accordion-body">
            To Hit: {this.props.atk.toHit}+
          </div>
          <TargetDisplay target={this.props.atk.target} />
          {listweapons}
        </div>
      </div>
    );
  }
}

export default AttackDisplay;
