import React from 'react';
import ProductsTable from '../components/ProductsTable';
import AddShipmentComponent from '../components/AddShipmentComponent';
import Header from '../components/Header';
import StopsComponent from '../components/StopsComponent';

export default function AddShipment() {
  return (
    <div>
        <Header />
        <h1>Personalize seu transporte: </h1>
        <ProductsTable />
        <AddShipmentComponent />
        <StopsComponent />
    </div>
  )
}
