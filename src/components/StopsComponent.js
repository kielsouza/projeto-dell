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
            return;
        }

        const costPerKm = localStorage.getItem("totalCostPerKm");
        const stopCity1 = document.getElementById("city-1-input").value;
        const stopCity2 = document.getElementById("city-2-input").value;

        const distance = Object.values(csv).find((city) => city[stopCity2] !== undefined)?.[stopCity2];
        if (distance !== undefined) {
            await this.setState({
                totalDistance: distance,
            });
        }

        this.setState((prevState) => ({
            stops: [
                ...prevState.stops,
                {
                    city1: stopCity1,
                    city2: stopCity2,
                    pricePerStop: (prevState.totalDistance * costPerKm.replace(",", ".")).toFixed(2),
                },
            ],
            city1: stopCity2,
            sumStops: prevState.stops.length + 1,
        }), () => {
            this.sumPricePerStop();
            localStorage.setItem("sumStops", this.state.sumStops);
            if (this.state.stops.length > 2) {
                localStorage.setItem(`stop${this.state.stops.length - 1}`, stopCity2);
            } else {
                localStorage.setItem("origin", this.state.city1);
                localStorage.setItem(`stop${this.state.stops.length - 1}`, stopCity2);
            }
        });
    };


    finishShipment = async () => {
        await this.setState((prevState) => ({
            shipments: prevState.shipments + 1,
        }));

        const obj = {
            origin: localStorage.getItem("origin"),
            ...this.state.stops.slice(1).reduce((acc, stop, i) => {
                acc[`stop${i + 1}`] = localStorage.getItem(`stop${i + 1}`);
                acc[`costStop${i + 1}`] = stop.pricePerStop;
                return acc;
            }, {}),
            totalPrice: localStorage.getItem("totalPrice"),
            costPerKm: localStorage.getItem("totalCostPerKm"),
            celular: localStorage.getItem("celular"),
            geladeira: localStorage.getItem("geladeira"),
            freezer: localStorage.getItem("freezer"),
            cadeira: localStorage.getItem("cadeira"),
            luminaria: localStorage.getItem("luminaria"),
            lavadora: localStorage.getItem("lavadora"),
            totalItems:
                Number(localStorage.getItem("celular")) +
                Number(localStorage.getItem("geladeira")) +
                Number(localStorage.getItem("freezer")) +
                Number(localStorage.getItem("cadeira")) +
                Number(localStorage.getItem("luminaria")) +
                Number(localStorage.getItem("lavadora")),
            smallTruck: localStorage.getItem("smallTruck"),
            mediumTruck: localStorage.getItem("mediumTruck"),
            bigTruck: localStorage.getItem("bigTruck"),
            totalTrucks: localStorage.getItem("totalTrucks"),
        };

        localStorage.setItem(`shipment${this.state.shipments}`, JSON.stringify(obj));
        localStorage.setItem("shipments", this.state.shipments);

        await this.setState({
            city1: "ARACAJU",
            city2: "ARACAJU",
            totalDistance: 0,
            pricePerStop: 0,
            stops: [{ city: "ARACAJU", city2: "ARACAJU", pricePerStop: 0 }],
            totalStopPrice: 0,
        }, () => {
            localStorage.setItem("celular", 0);
            localStorage.setItem('geladeria', 0);
            localStorage.setItem('freezer', 0);
            localStorage.setItem('cadeira', 0);
            localStorage.setItem('luminaria', 0);
            localStorage.setItem('lavadora', 0);
            document.location.reload();
        })
    };

    sumPricePerStop = () => {
        var sum = 0;
        for (let stop in this.state.stops) {
            sum += parseFloat(this.state.stops[stop].pricePerStop);
        };
        this.setState({ totalStopPrice: sum });
        localStorage.setItem(`totalPrice`, sum.toFixed(2));
    };

    render() {
        const { stops, totalStopPrice, city1 } = this.state;
        return (
            <div
                data-testid="stops-component-container"
                className="stops-component-container"
            >
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
                            {stops.slice(1).map((stop, index) => (
                                <tr className="table-row" key={index}>
                                    <td
                                        data-testid={`stop-table-line-${index + 1}-cities`}
                                        className="body-item"
                                    >
                                        {index + 1} - {stop.city1} ---&gt; {stop.city2}
                                    </td>
                                    <td
                                        data-testid={`stop-table-line-${index + 1}-price`}
                                        className="body-item"
                                        id="price-per-stop-column"
                                    >
                                        {Number(stop.pricePerStop).toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL',
                                        })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="table-row">
                                <td data-testid="stop-last-line-total" className="table-last-line">
                                    Total:{' '}
                                </td>
                                <td data-testid="stop-last-line-price" className="table-last-line">
                                    {totalStopPrice.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    })}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="stops-container">
                    {stops.length > 1 ? (
                        <label htmlFor="city-1-input">
                            Origem:
                            <select id="city-1-input" name="city1" onChange={this.onInputChange}>
                                <option key={city1} value={city1}>
                                    {city1}
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

                <button
                    data-testid="add-stop-button"
                    className="blue-btn"
                    type="button"
                    onClick={this.addStop}
                >
                    Adicionar Parada
                </button>
                <button
                    className="red-btn"
                    type="button"
                    onClick={this.finishShipment}
                >
                    Finalizar Transporte
                </button>
            </div>
        )
    }
}
