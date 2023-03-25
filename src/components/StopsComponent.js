import React, { Component, useState } from 'react'
import csv from '../services/csv'; //dados mockados do CSV

export default class StopsComponent extends Component {
    state = {
        cities: [],
        city1: "ARACAJU",
        city2: "ARACAJU",
        totalDistance: 0,
        totalPrice: 0,
        stops: [{}],
    };

    componentDidMount() {
        const cities = Object.keys(csv); //transforma as keys do csv em um array de cidades
        this.setState({ cities: cities });
    };

    onInputChange = ({ target }) => {
        const value = target.value;
        if (target.value < 0) {
            window.alert("O valor deve ser maior que 0!");
        } else {
            this.setState({
                [target.name]: value, // seta os estados dos inputs
            });
        }
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
    useForceUpdate = () => {
        const [value, setValue] = useState(0); // integer state
        return () => setValue(value => value + 1); // update state to force render
        // A function that increment 👆🏻 the previous state like here 
        // is better than directly setting `setValue(value + 1)`
    }
    addStop = () => {
        if (this.state.city1 === this.state.city2) {
            window.alert("A origem e destino nao podem ser iguais!");
        } else {
            var stopCity1 = document.getElementById("city-1-input").value;
            var stopCity2 = document.getElementById("city-2-input").value;
            console.log(stopCity1);
            console.log(stopCity2);
            this.state.stops.push({ city1: stopCity1, city2: stopCity2 });
            this.setState({ city1: stopCity2 });
        }
    };

    render() {
        return (
            <div>
                {this.state.stops.map((stop, index) => (
                    index > 0 ?
                        <p key={index}>Parada {index} - Origem: {stop.city1} Destino: {stop.city2}</p>
                        : null
                ))}
                <div>
                    {this.state.stops.length > 1 ? (
                        <label htmlFor="city-1-input">
                            Origem:
                            <select
                                id="city-1-input"
                                name="city1"
                                onChange={this.onInputChange}
                            >
                                <option
                                    key={this.state.city1}
                                    value={this.state.city1}
                                >
                                    {this.state.city1}
                                </option>
                            </select>
                        </label>
                    ) : (
                        <label htmlFor="city-1-input">
                            Origem:
                            <select
                                id="city-1-input"
                                name="city1"
                                onChange={this.onInputChange}
                            >
                                {this.printCitiesList()}
                            </select>
                        </label>
                    )}
                    <label htmlFor="city-2-input">
                        Destino:
                        <select
                            id="city-2-input"
                            name="city2"
                            onChange={this.onInputChange}
                        >
                            {this.printCitiesList()}
                        </select>
                    </label>
                    <button type="button" onClick={this.addStop}>Adicionar Parada</button>
                </div>
            </div >
        )
    }
}
