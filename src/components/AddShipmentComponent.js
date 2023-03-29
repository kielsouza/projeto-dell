import React, { Component } from 'react'
import products from '../services/products';
import csv from '../services/csv'; //dados mockados do CSV
import '../scss/Tables.scss';

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
        products: [],
        celular: 0,
        geladeira: 0,
        freezer: 0,
        cadeira: 0,
        luminaria: 0,
        lavadora: 0,
        costPerKm: 0,
    };

    componentDidMount() {
        const cities = Object.keys(csv); //transforma as keys do csv em um array de cidades
        this.setState({ cities: cities });
        localStorage.setItem('celular', 0);
        localStorage.setItem('geladeria', 0);
        localStorage.setItem('freezer', 0);
        localStorage.setItem('cadeira', 0);
        localStorage.setItem('luminaria', 0);
        localStorage.setItem('lavadora', 0);
        this.getProducts();
    };

    getProducts = async () => {
        await this.setState({
            products: products,
        });
    };

    sumTotalWeight = () => {

        var weightColumn = document.getElementsByClassName("weight-column");
        var weight = 0;
        for (let i = 0; i < 6; i++) {
            weight += parseFloat(weightColumn[i].innerHTML);
        };
        localStorage.setItem('totalWeight', (weight / 1000).toFixed(4))
        this.getTotalTrucks();
    };

    onInputChange = ({ target }) => {
        const value = target.value;
        if (value < 0) {
            window.alert("O valor deve ser maior que 0!");
            this.setState({
                [value]: 0,
            });
        } else {
            this.setState({
                [target.name]: value, // seta os estados dos inputs
            }, () => this.sumTotalWeight());
            localStorage.setItem(target.name, value);
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

    getWeightFromComponent = () => {
        var weightFromComponent = localStorage.getItem('totalWeight');
        this.setState({ totalWeight: weightFromComponent });
    }

    getTotalTrucks = async () => {
        await this.getWeightFromComponent();

        const { totalWeight } = this.state;
        const bigTruck = Math.floor(totalWeight / 10);
        const remainingTons = totalWeight - bigTruck * 10;
        const mediumTruck = Math.floor(remainingTons / 4);
        const smallTruck = Math.ceil((remainingTons - mediumTruck * 4) / 1.5);

        const totalTrucks = bigTruck + mediumTruck + smallTruck;
        const costPerKm = (smallTruck * 4.87) + (mediumTruck * 11.92) + (bigTruck * 37.44);
        this.setState({
            bigTruck,
            mediumTruck,
            smallTruck,
            remainingTons,
            totalTrucks,
            costPerKm
        });

        localStorage.setItem('smallTruck', smallTruck);
        localStorage.setItem('mediumTruck', mediumTruck);
        localStorage.setItem('bigTruck', bigTruck);
        localStorage.setItem('totalTrucks', totalTrucks);
        localStorage.setItem('totalCostPerKm', costPerKm);
    };

    render() {
        return (
            <div>
                <div data-testid="products-table-container">
                    <h1 className="title">Personalize seu transporte: </h1>
                    <table data-testid="products-table" className="table">
                        <thead className="table-header">
                            <tr>
                                <th className="header-item">Produto</th>
                                <th className="header-item">Peso Unt.</th>
                                <th className="header-item">Qtd.</th>
                                <th className="header-item">Peso Total (Kg)</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {this.state.products.length > 0 ? (
                                this.state.products.map(product => (
                                    <tr key={product.productName} className="table-row">

                                        <td className="body-item">{product.productName}</td>
                                        <td className="body-item">{product.productWeight}</td>
                                        <td className="body-item">
                                            <input data-testid={`${product.id}-quantity`} min="0" type="number" name={product.id} onChange={this.onInputChange} defaultValue="0"></input>
                                        </td>
                                        <td className="weight-column body-item">{(product.productWeight * this.state[product.id]).toFixed(1)}</td>
                                    </tr>
                                ))
                            ) : null}
                            <tr className="table-row">
                                <td className="table-last-line" colSpan="3">Toneladas:</td>
                                <td data-testid="total-weight" className="table-last-line" id="total-weight">{this.state.totalWeight}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div data-testid="add-shipment-container" className="trucks-container">
                    <table data-testid="trucks-table" className="table">
                        <thead className="table-header">
                            <tr>
                                <th className="header-item">Caminhoes Pequenos</th>
                                <th className="header-item">Caminhoes Medios</th>
                                <th className="header-item">Caminhoes Grandes</th>
                                <th className="header-item">Custo por km</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            <tr className="table-row">
                                <td data-testid="small-truck-quantity" className="body-item">{this.state.smallTruck}</td>
                                <td data-testid="medium-truck-quantity" className="body-item">{this.state.mediumTruck}</td>
                                <td data-testid="large-truck-quantity" className="body-item">{this.state.bigTruck}</td>
                                <td data-testid="cost-per-km" className="body-item" id="cost-per-km">{this.state.costPerKm.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


