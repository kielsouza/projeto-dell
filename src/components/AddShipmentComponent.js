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
        totalTrucks: 0,
    };

    componentDidMount() {
        const cities = Object.keys(csv); //transforma as keys do csv em um array de cidades
        this.setState({cities: cities});
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
    
    getWeightFromComponent = () => {
        var weightFromComponent = document.getElementById("total-weight").innerHTML;
        this.setState({ totalWeight: weightFromComponent });
    }

    getTotalTrucks = async () => {
        await this.getWeightFromComponent();
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
        this.setState({ totalTrucks: (this.state.smallTruck * 4.87) + (this.state.mediumTruck * 11.92) + (this.state.bigTruck * 37.44)});
    };

  render() {
    return (
      <div>
            <p>Caminhao Pequeno: {this.state.smallTruck} </p>
            <p>Caminhao Médio: {this.state.mediumTruck} </p>
            <p>Caminhao Grande: {this.state.bigTruck} </p>
            <p>Custo total por km:</p>
            <p id="cost-per-km">{this.state.totalTrucks.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <button type="button" onClick={ this.getTotalTrucks }>Total</button>
      </div>
    )
  }
}


