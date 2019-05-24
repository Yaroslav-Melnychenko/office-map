import React from 'react';
import FloorTab from '../FloorTab';
import './Floor.scss';

const Floor = () => (
  <div className="container">
    <ul className="tabs">
      <li>4 floor</li>
      <li>5 floor</li>
      <FloorTab />
    </ul>
  </div>
);

export default Floor;