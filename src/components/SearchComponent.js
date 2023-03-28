import React, { Component } from 'react';
import csv from '../services/csv'; //dados mockados do CSV
import '../scss/Inputs.scss';
export default class SearchComponent extends Component {

  state = {
    cities: [],
    city1: "ARACAJU",
    city2: "ARACAJU",
    truck: "Caminhão de pequeno porte (1 Ton)",
    totalDistance: 0,
    totalPrice: 0,
  };

  componentDidMount() {
    const cities = Object.keys(csv); //transforma as keys do csv em um array de cidades
    this.setState({ cities: cities });
  };

  onInputChange = ({ target }) => {
    const value = target.value;
    this.setState({
      [target.name]: value, // seta os estados dos inputs
    }, () => this.shipmentTotal());
  };

  printCitiesList = () => {
    const list = this.state.cities.map((city) => ( // cria um elemento de input para cada cidade
      <option
        key={city}
        value={city}
        data-testid="cities-option"
      >
        {city}
      </option>
    ));
    return list;
  };

  shipmentTotal = async () => {
    for (let key in csv) { // nested loops para verificar as distancias entre city1 e city 2
      if (this.state.city1 === key) {
        for (let key2 in csv[key]) {
          if (this.state.city2 === key2) {
            await this.setState({
              totalDistance: csv[key][key2],
            })
          }
        }
      }
    };

    switch (this.state.truck) { // switch case para calcular o totalPrice com base na distancia e valor por km
      case "Caminhão de pequeno porte (1 Ton)":
        await this.setState({ totalPrice: this.state.totalDistance * 4.87 });
        break;
      case "Caminhão de médio porte (4 Ton)":
        await this.setState({ totalPrice: this.state.totalDistance * 11.92 });
        break;
      case "Caminhão de grande porte (10 Ton)":
        await this.setState({ totalPrice: this.state.totalDistance * 27.44 });
        break;
      default:
        break;
    };
  };
  render() {
    return (
      <div>
        <div className="inputs-container">
          <h1 className="title">Consulte sua rota: </h1>
          <label htmlFor="city-1-input">
            Cidade Origem
            <select
              data-testid="city-1-input"
              name="city1"
              onChange={this.onInputChange}
              className="select-input"
            >
              {this.printCitiesList()}
            </select>
          </label>
          <label htmlFor="city-2-input">
            Cidade Destino
            <select
              data-testid="city-2-input"
              name="city2"
              onChange={this.onInputChange}
              className="select-input"
            >
              {this.printCitiesList()}
            </select>
          </label>
          <label htmlFor="truck-input">
            Transporte Selecionado
            <select
              data-testid="truck-input"
              name="truck"
              value={this.state.truck}
              onChange={this.onInputChange}
              className="select-input"
            >
              <option value="Caminhão de pequeno porte (1 Ton)">Caminhão de pequeno porte (1 Ton)</option>
              <option value="Caminhão de médio porte (4 Ton)">Caminhão de médio porte (4 Ton)</option>
              <option value="Caminhão de grande porte (10 Ton)">Caminhão de grande porte (10 Ton)</option>
            </select>
          </label>
        </div>
        <div className="btn-container">
          {/* <button data-testid="fetch-search-btn" className="blue-btn" onClick={this.shipmentTotal}> Ok </button> */}
          <p data-testid="sys-answer" className="search-display">De {this.state.city1} para {this.state.city2}, utilizando um {this.state.truck}, a distância é de {this.state.totalDistance} km e o custo será de R$ {this.state.totalPrice.toFixed(2)}.</p>
        </div>
      </div>
    )
  }
}
