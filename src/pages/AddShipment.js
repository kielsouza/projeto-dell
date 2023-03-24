import React from 'react';
import ProductsTable from '../components/ProductsTable';
import AddShipmentComponent from '../components/AddShipmentComponent';
import Header from '../components/Header';

export default function AddShipment() {
  return (
    <div>
        <Header />
        <ProductsTable />
        <AddShipmentComponent />
    </div>
  )
}
