import React, { Component } from 'react'
import csv from '../services/csv'; //dados mockados do CSV

export default class StopsComponent extends Component {
    state = {
        cities: [],
        city1: "ARACAJU",
        city2: "ARACAJU",
        totalDistance: 0,
        totalPrice: 0,
        stops: [],
    };

    componentDidMount() {
        const cities = Object.keys(csv); //transforma as keys do csv em um array de cidades
        this.setState({ cities: cities });
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
                key={city}
                value={city}
            >
                {city}
            </option>
        ));
        return list;
    };

    addStop = () => {
        var stopCity1 = this.state.city1;
        var stopCity2 = this.state.city2;
        this.state.stops.push({ city1: stopCity1, city2: stopCity2 });
    }

    render() {
        return (
            <div>
                <p>Paradas: <input type="number" name="shippingQuantity" onChange={ this.onInputChange } defaultValue="1"></input></p>
                <div>
                    <label htmlFor="city-1-input">/
                        Origem:
                        <select
                            data-testid="city-1-input"
                            name="city1"
                            onChange={this.onInputChange}
                        >
                            {this.printCitiesList()}
                        </select>
                    </label>
                    <label htmlFor="city-2-input">
                        Destino:
                        <select
                            data-testid="city-2-input"
                            name="city2"
                            onChange={this.onInputChange}
                        >
                            {this.printCitiesList()}
                        </select>
                    </label>
                    <button type="button" onClick={ this.addStop }>Adicionar Parada</button>
                </div>
            </div>
        )
    }
}
