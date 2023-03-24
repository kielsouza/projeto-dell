import React from 'react';
import SearchComponent from '../components/SearchComponent';
import Header from '../components/Header';

export default function SearchPage() {
  return (
    <div>
        <Header />
        <h1>Consulte sua rota: </h1>
        <SearchComponent />
    </div>
  )
};
