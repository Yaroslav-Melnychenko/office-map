import React, { Component } from 'react';
import FloorPlan from './FloorPlan';
import './FloorSvg5.scss';

class FloorSvg5 extends Component {

  state = {
    selected: null
  }

  placeClick = (id) => {
    const { selectPlace } = this.props;
    this.setState({ selected: id });
    selectPlace(id);
  }

  render() {

    const { employees } = this.props;
    const { selected } = this.state;

    return (
      <svg viewBox="300 -300 600 600">
        {
          employees && employees.map(employee => (
            <g key={employee.id} className="one-place" onClick={() => this.placeClick(employee.id)} >
              <path className={`st0 ${ employee.id === selected ? 'selected' : null }`} d={employee.d} />
            </g>
          ))
        }
        <FloorPlan />
      </svg>
    );
  }
}
export default FloorSvg5;