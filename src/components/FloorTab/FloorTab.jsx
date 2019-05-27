import React, { Component } from 'react';
import axios from 'axios';
import FloorSvg5 from '../FloorSvg5';
import './FloorTab.scss';

class FlooTab extends Component {

  state ={
    employees: [],
    place: null
  }

  componentDidMount() {
    axios.get('http://localhost:4000/floor5').then(responce => {
      this.setState({ employees: responce.data });
    })
  }

  selectPlace = (place) => {
    this.setState({ place });
  }

  render() {

    const { employees, place } = this.state;
    return (

      <div className="floor-container">
        <div className="map">
        <FloorSvg5 employees={employees} selectPlace={this.selectPlace} />
        </div>
        <div className="worker">
          <p>Place: <span>{ place }</span></p>
        </div>
      </div>
    );
  }
}
export default FlooTab;