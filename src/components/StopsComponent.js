import React, { Component } from 'react'
import csv from '../services/csv'; //dados mockados do CSV
import '../scss/Tables.scss';

export default class StopsComponent extends Component {
    state = {
        cities: [],
        city1: "ARACAJU",
        city2: "ARACAJU",
        totalDistance: 0,
        pricePerStop: 0,
        stops: [{ city: "ARACAJU", city2: "ARACAJU", pricePerStop: 0 }],
        totalStopPrice: 0,
        shipments: 0,
        sumStops: 1,
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
            const costPerKm = localStorage.getItem("totalCostPerKm");
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
            this.state.stops.push({ city1: stopCity1, city2: stopCity2, pricePerStop: (this.state.totalDistance * costPerKm.replace(',', '.')).toFixed(2) });
            if (this.state.stops.length > 2) {
                localStorage.setItem(`stop${(this.state.stops.length) - 1}`, stopCity2);
            } else {
                localStorage.setItem("origin", this.state.city1);
                localStorage.setItem(`stop${(this.state.stops.length) - 1}`, stopCity2);
            }
            this.setState({ city1: stopCity2, sumStops: this.state.stops.length }, () => this.sumPricePerStop());
            localStorage.setItem("sumStops", this.state.sumStops);
        }
    };

    finishShipment = async () => {
        await this.setState({ shipments: this.state.shipments + 1 });
        var obj = {};
        obj.origin = localStorage.getItem("origin");
        for (let i = 1; i < this.state.stops.length; i++) {
            obj[`stop${i}`] = localStorage.getItem(`stop${i}`);
            obj[`costStop${i}`] = this.state.stops[i].pricePerStop;
        };
        obj.totalPrice = localStorage.getItem("totalPrice");
        obj.costPerKm = localStorage.getItem("totalCostPerKm");
        obj.celular = localStorage.getItem("celular");
        obj.geladeira = localStorage.getItem("geladeira");
        obj.freezer = localStorage.getItem("freezer");
        obj.cadeira = localStorage.getItem("cadeira");
        obj.luminaria = localStorage.getItem("luminaria");
        obj.lavadora = localStorage.getItem("lavadora");
        obj.totalItems = (Number(obj.celular) + Number(obj.geladeira) + Number(obj.freezer) + Number(obj.cadeira) + Number(obj.luminaria) + Number(obj.lavadora));
        obj.smallTruck = localStorage.getItem("smallTruck");
        obj.mediumTruck = localStorage.getItem("mediumTruck");
        obj.bigTruck = localStorage.getItem("bigTruck");
        obj.totalTrucks = localStorage.getItem("totalTrucks");

        localStorage.setItem(`shipment${this.state.shipments}`, JSON.stringify(obj));
        localStorage.setItem("shipments", this.state.shipments);
        this.setState({
            city1: "ARACAJU",
            city2: "ARACAJU",
            totalDistance: 0,
            pricePerStop: 0,
            stops: [{ city: "ARACAJU", city2: "ARACAJU", pricePerStop: 0 }],
            totalStopPrice: 0,
        })
    }

    sumPricePerStop = () => {
        var sum = 0;
        for (let stop in this.state.stops) {
            sum += parseFloat(this.state.stops[stop].pricePerStop);
        };
        this.setState({ totalStopPrice: sum });
        localStorage.setItem(`totalPrice`, sum.toFixed(2));
    };

    render() {
        return (
            <div data-testid="stops-component-container" className="stops-component-container">
                <div>
                    <p></p>
                    <table data-testid="stops-table" className="table">
                        <thead className="table-header">
                            <tr>
                                <th className="header-item">Paradas</th>
                                <th className="header-item">Custo por trecho</th>
                            </tr>

                        </thead>
                        <tbody>
                            {this.state.stops.map((stop, index) => (
                                index > 0 ? (
                                    <tr className="table-row" key={index}>
                                        <td data-testid={`stop-table-line-${index}-cities`} className="body-item">{index} - {stop.city1} ---{'>'} {stop.city2}</td>
                                        <td data-testid={`stop-table-line-${index}-price`} className="body-item" id="price-per-stop-column">{Number(stop.pricePerStop).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    </tr>
                                )
                                    : null
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="table-row">
                                <td data-testid="stop-last-line-total" className="table-last-line">Total: </td>
                                <td data-testid="stop-last-line-price" className="table-last-line">{(this.state.totalStopPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="stops-container">
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
                                data-testid="city-1-input"
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
                            data-testid="city-2-input"
                            id="city-2-input"
                            name="city2"
                            onChange={this.onInputChange}
                        >
                            {this.printCitiesList()}
                        </select>
                    </label>
                </div>
                <button className="blue-btn" type="button" onClick={this.addStop}>Adicionar Parada</button>
                <button className="red-btn" type="button" onClick={this.finishShipment}>Finalizar Transporte</button>
            </div >
        )
    }
}
