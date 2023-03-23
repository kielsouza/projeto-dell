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

    onInputChange = ({ target }) => {
        const value = target.value; 
        this.setState({
          [target.name]: value, // seta os estados dos inputs 
        });
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
                            <th>Peso Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.products.length > 0 ? (
                            this.state.products.map(product => (
                                <tr key={ product.productName }>
                                
                                <td>{ product.productName }</td>
                                <td>{ product.productWeight }</td>
                                <td>
                                    <input type="number" name={ product.id } onChange={ this.onInputChange } defaultValue = "0"></input>
                                </td>
                                { console.log(product.id) }
                                <td>{ product.productWeight * this.state[product.id] }</td>
                                <td>
                                    <button
                                        type="button"
                                    >
                                        Limpar
                                    </button>
                                </td>
                            </tr>
                            ))
                        ): null }                                                 
                    </tbody>
                </table>
            </div>
        )
    }
}
