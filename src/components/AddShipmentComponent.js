import React, { Component } from 'react'
import csv from '../services/csv'; //dados mockados do CSV

export default class AddShipmentComponent extends Component {

    state = {
        cities: [],
        city1: "ARACAJU",
        city2: "ARACAJU",
        bigTruck: 0,
        mediumTruck: 0,
        smallTruck: 0,
        trucks: "Caminhão de pequeno porte (1 Ton)",
        totalWeight: 0,
        remainingTons: 0,
    };

    componentDidMount() {
        const cities = Object.keys(csv); //transforma as keys do csv em um array de cidades
        this.setState({cities: cities});
    };

    onInputChange = ({ target }) => {
        const value = target.value; 
        this.setState({
          [target.name]: value, // seta os estados dos inputs
        });
    };

    printCitiesList = () => {
        const list = this.state.cities.map((city) => ( // cria um elemento de input para cada cidade
          <option
            key={ city }
            value={ city }
          >
            { city }
          </option>
        ));
        return list;
      };

    getTotalTrucks = async () => {
        this.setState({
            bigTruck: 0,
            mediumTruck: 0,
            smallTruck: 0,
            remainingTons: 0,
        });
        if (((this.state.totalWeight / 10) - Math.floor((this.state.totalWeight / 10)) === 0)) {
            await this.setState({bigTruck: this.state.totalWeight / 10});
        } else if (((this.state.totalWeight / 10) - Math.floor((this.state.totalWeight / 10)) !== 0)) {
            await this.setState({
                bigTruck:  Math.floor(this.state.totalWeight / 10),
                remainingTons: this.state.totalWeight - 10 * Math.floor(this.state.totalWeight / 10)});
            if (((this.state.remainingTons / 4) - Math.floor((this.state.remainingTons / 4)) === 0)) {
                await this.setState({
                    mediumTruck: this.state.remainingTons / 4,
                    remainingTons: 0,
                });
            } else if (((this.state.remainingTons / 4) - Math.floor((this.state.remainingTons / 4)) !== 0)) {
                await this.setState({
                    mediumTruck: Math.floor(this.state.remainingTons / 4),
                    remainingTons: this.state.remainingTons - (4 * Math.floor(this.state.remainingTons / 4)),
                });
                if ((this.state.remainingTons > 0) && (this.state.remainingTons <= 1) ) {
                    await this.setState({smallTruck: 1});
                } else if ( this.state.remainingTons > 1 && this.state.remainingTons <= 2 ) {
                    await this.setState({smallTruck: 2});
                } else {
                    await this.setState({smallTruck: 3});
                }   
            }
        }
    };

  render() {
    return (
      <div>
{/*         <label htmlFor="city-1-input">
            Cidade Origem
            <select
                data-testid="city-1-input"
                name="city1"
                onChange= { this.onInputChange }
            >
                { this.printCitiesList() }
            </select>
            </label>
            <label htmlFor="city-2-input">
            Cidade Destino
            <select
                data-testid="city-2-input"
                name="city2"
                onChange= { this.onInputChange }
            >
                { this.printCitiesList() }
            </select>
            </label> */}
            <label htmlFor="totalWeight">Toneladas: </label>

            <input type="number" id="totalWeight" name="totalWeight" onChange={ this.onInputChange }
            ></input>
            <p>Caminhao Pequeno: {this.state.smallTruck} </p>
            <p>Caminhao Médio: {this.state.mediumTruck} </p>
            <p>Caminhao Grande: {this.state.bigTruck} </p>
            <button type="button" onClick={ this.getTotalTrucks }>Total</button>
      </div>
    )
  }
}


