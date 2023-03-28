import React, { Component } from 'react'
import products from '../services/products';
import '../scss/Tables.scss';

export default class ProductsTable extends Component {
    state = {
        products: [],
        productTotalWeight: 0,
        celular: 0,
        geladeira: 0,
        freezer: 0,
        cadeira: 0,
        luminaria: 0,
        lavadora: 0,
    };

    componentDidMount() {
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
            console.log()
            weight += parseFloat(weightColumn[i].innerHTML);
        };
        this.setState({
            productTotalWeight: weight,
        });
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

    render() {
        return (
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
                                    <td className="weight-column body-item">{(product.productWeight * this.state[product.id]).toFixed(2)}</td>
                                </tr>
                            ))
                        ) : null}
                        <tr className="table-row">
                            <td className="table-last-line" colSpan="3">Toneladas:</td>
                            <td className="table-last-line" id="total-weight">{(this.state.productTotalWeight / 1000).toFixed(4)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
