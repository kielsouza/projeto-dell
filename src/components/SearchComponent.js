 import React, { Component } from 'react';
 import csv from '../services/csv';

 export default class SearchComponent extends Component {

    state = {
        cities: [],
        city1: "ARACAJU",
        city2: "ARACAJU",
        truck: "Caminhão de pequeno porte (1 Ton)",
      };

    componentDidMount() {
        const cities = Object.keys(csv);
        this.setState({cities: cities});
        console.log(cities);
    };

    onInputChange = ({ target }) => {
        const value = target.value;
        this.setState({
          [target.name]: value,
        });
    };
    
    printCitiesList = () => {
        const list = this.state.cities.map((city) => (
          <option
            key={ city }
            value={ city }
          >
            { city }
          </option>
        ));
        return list;
      };
    
    /* shipmentTotal = () => {
        csv.forEach((city) => {
            if (this.state.city1 === city) {
                console.log(city);
            }
        });
    }; */
    render() {
      return (
        <div>
            <p>Consulte o seu transporte: </p>
            <label htmlFor="city-1-input">
            Cidade Origem:
            <select
                data-testid="city-1-input"
                name="city1"
                onChange= { this.onInputChange }
            >
                { this.printCitiesList() }
            </select>
            </label>
            <label htmlFor="city-2-input">
            Cidade Destino:
            <select
                data-testid="city-2-input"
                name="city2"
                onChange= { this.onInputChange }
            >
                { this.printCitiesList() }
            </select>
            </label>
            <label htmlFor="truck-input">
                Transporte Selecionado:
                <select
                    data-testid="truck-input"
                    name="truck"
                    value={ this.state.truck }
                    onChange= { this.onInputChange }
                >
                    <option value="Caminhão de pequeno porte (1 Ton)">Caminhão de pequeno porte (1 Ton)</option>
                    <option value="Caminhão de médio porte (4 Ton)">Caminhão de médio porte (4 Ton)</option>
                    <option value="Caminhão de grande porte (10 Ton)">Caminhão de grande porte (10 Ton)</option>
                </select>
            </label>
            <p>de { this.state.city1 } para { this.state.city2 }, utilizando um { this.state.truck }, a distância é de XXX km e o custo será de R$ xxx,00.</p>
        </div>
      )
    }
 }
 