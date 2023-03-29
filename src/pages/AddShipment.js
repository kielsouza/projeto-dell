import React from 'react';
import AddShipmentComponent from '../components/AddShipmentComponent';
import Header from '../components/Header';
import StopsComponent from '../components/StopsComponent';

export default function AddShipment() {
  return (
    <div>
        <Header />
        <AddShipmentComponent />
        <StopsComponent />
    </div>
  )
}
