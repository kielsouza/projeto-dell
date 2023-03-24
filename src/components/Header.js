import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <ul>
            <Link to="/">
                <li>Consultar Valores</li>
            </Link>
            <Link to="/addshipment">
                <li>Cadastrar Remessa</li>
            </Link>
        </ul>
      </div>
    )
  }
}
