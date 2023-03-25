import React, { Component } from 'react'
import products from '../services/products';

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
        if (target.value < 0) {
            window.alert("O valor deve ser maior que 0!");
            this.setState({
                [target.value]: 0,
            });
        }else {
            this.setState({
                [target.name]: value, // seta os estados dos inputs
            }, () => this.sumTotalWeight());
        }
    };

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Peso Unt.</th>
                            <th>Qtd.</th>
                            <th>Peso Total (Kg)</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.products.length > 0 ? (
                            this.state.products.map(product => (
                                <tr key={ product.productName }>
                                
                                <td>{ product.productName }</td>
                                <td>{ product.productWeight }</td>
                                <td>
                                    <input min="0" type="number" name={ product.id } onChange={ this.onInputChange } defaultValue = "0"></input>
                                </td>
                                <td className="weight-column">{ (product.productWeight * this.state[product.id]).toFixed(2) }</td>
                            </tr>
                            ))
                        ): null }
                        <tr>
                            <td>Toneladas:</td>
                            <td id="total-weight">{ (this.state.productTotalWeight/1000).toFixed(4) }</td>
                        </tr>                                                
                    </tbody>
                </table>
            </div>
        )
    }
}
