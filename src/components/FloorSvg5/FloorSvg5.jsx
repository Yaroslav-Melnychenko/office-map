import React, { Component } from 'react';
import axios from 'axios';
import FloorPlan from './FloorPlan';
import './FloorSvg5.scss';

class FloorSvg5 extends Component {

  state ={
    employees: null
  }

  componentDidMount() {
    axios.get('http://localhost:4000/floor5').then(responce => {
      this.setState({ employees: responce.data });
    })
  }

  render() {
    const { employees } = this.state;
    return (
      <svg width="376.16mm" height="251.84mm" viewBox="0 0 1066.28 713.89">
        {
          employees && employees.map(employee => (
            <g key={employee.id} className="one-place">
              <path className="st0" d={employee.d} />
              {/* <path className="st1" d={employee.d2} /> */}
            </g>
          ))
        }
        <FloorPlan />
      </svg>
    );
  }
}
export default FloorSvg5;