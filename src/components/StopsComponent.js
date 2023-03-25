import React, { Component, useState } from 'react'
import csv from '../services/csv'; //dados mockados do CSV

export default class StopsComponent extends Component {
    state = {
        cities: [],
        city1: "ARACAJU",
        city2: "ARACAJU",
        totalDistance: 0,
        pricePerStop: 0,
        stops: [{ city: "ARACAJU", city2: "ARACAJU", pricePerStop: 0 }],
        totalStopPrice: 0,
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

    addStop = async () => {
        if (this.state.city1 === this.state.city2) {
            window.alert("A origem e destino nao podem ser iguais!");
        } else {
            const costPerKm = (document.getElementById("cost-per-km").innerHTML).replace('R$&nbsp;','');;
            console.log(costPerKm);
            var stopCity1 = document.getElementById("city-1-input").value;
            var stopCity2 = document.getElementById("city-2-input").value;
            for (let key in csv) { // nested loops para verificar as distancias entre city1 e city 2
                if (stopCity1 === key) {
                    for (let key2 in csv[key]) {
                        if (stopCity2 === key2) {
                            await this.setState({
                                totalDistance: csv[key][key2],
                            })
                        }
                    }
                }
            };
            this.state.stops.push({ city1: stopCity1, city2: stopCity2, pricePerStop: (this.state.totalDistance * costPerKm.replace(',','.')).toFixed(2) });
            this.setState({ city1: stopCity2 }, () => this.sumPricePerStop());
        }
    };

    sumPricePerStop = () => {
        var sum = 0;
         for (let stop in this.state.stops) {
            sum +=  parseFloat(this.state.stops[stop].pricePerStop);
        };
        this.setState({ totalStopPrice: sum });
    };

    render() {
        return (
            <div>

                <div>
                    <p></p>
                    <table>
                        <thead>
                            <tr>
                                <th>Paradas</th>
                                <th>Custo por trecho</th>
                            </tr>

                        </thead>
                        <tbody>
                            {this.state.stops.map((stop, index) => (
                                index > 0 ? (
                                    <tr key={index}>
                                        <td>{index} - Origem: {stop.city1} Destino: {stop.city2}</td>
                                        <td id="price-per-stop-column">{Number(stop.pricePerStop).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    </tr>
                                )
                                    : null
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total: </td>
                                <td>{(this.state.totalStopPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

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
