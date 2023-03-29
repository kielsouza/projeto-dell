import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../scss/Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div data-testid="page-header" className="header-div">
        <h2 className="header-title">Dely</h2>
        <Link to="/">
          <p className="header-links">Consultar Valores</p>
        </Link>
        <Link to="/addshipment">
          <p className="header-links" data-testid="add-shipment-btn">Cadastrar Remessa</p>
        </Link>
        <Link to="/reports">
          <p className="header-links" data-testid="reports-btn">Relatorios</p>
        </Link>
      </div>
    )
  }
}
