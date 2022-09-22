/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './targetDisplay.scss';

class TargetDisplay extends React.Component {
  render() {
    return (
      <div className="target-info accordion-body">
        <h4 className="target-title">Target</h4>
        <div className="target-data">
          <div className="target-Thougness">T: {this.props.target.T}</div>
          <div className="target-save">Sv: {this.props.target.Sv}+</div>
          <div className="weapon-ap">Invul: {this.props.target.Svv}++</div>
        </div>
      </div>
    );
  }
}

export default TargetDisplay;
