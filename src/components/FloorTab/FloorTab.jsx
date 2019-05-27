import React, { Component } from 'react';
import FloorSvg5 from '../FloorSvg5';
import './FloorTab.scss';

class FlooTab extends Component {
  render() {
    return (
      <div className="floor-container">
        <div className="map">
          <FloorSvg5 />
        </div>
        <div className="worker">worker</div>
      </div>
    );
  }
}
export default FlooTab;