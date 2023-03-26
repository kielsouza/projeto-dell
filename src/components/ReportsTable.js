import React, { Component } from 'react'

export default class ReportsTable extends Component {

    state = {
        shipments: [],
        shipmentsQuantity: 0,
        sumStops: [],
    };

    componentDidMount() {
        this.getShipmentObj();
    };

    getShipmentObj = async () => {
        var obj = {};
        var quantity = localStorage.getItem("shipments");
        for (let i = 0; i < quantity; i++) {
            var index = `shipment${i + 1}`;
            obj[i] = await localStorage.getItem(index);
            this.state.shipments.push(JSON.parse(obj[i]));
        }
        var storageStops = localStorage.getItem("sumStops")
        this.setState({ shipmentsQuantity: quantity })
        for (var i = 0; i < storageStops; i++) {
            this.state.sumStops.push(i);
        }
    };

    render() {
        const { shipments, shipmentsQuantity, sumStops } = this.state;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Origem</th>
                            {sumStops.map((index) => (
                                <th key={index}>{`Parada ${index + 1}`}</th>
                            ))}
                            {sumStops.map((index) => (
                                <th key={index}>{`Custo Parada ${index + 1}`}</th>
                            ))}
                            <th>Custo medio por km</th>
                            <th>Custo Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shipmentsQuantity > 0 ? (
                            shipments.map((shipment, index) => (
                                <tr key={index}>
                                    <td>{`Transporte ${index + 1}`}</td>
                                    <td>{shipment.origin}</td>
                                    {sumStops.map((index) => (
                                        <td key={index}>{shipment[`stop${index + 1}`]}</td>
                                    ))}
                                    {sumStops.map((index) => (
                                        <td key={index}>{shipment[`costStop${index + 1}`]}</td>
                                    ))}
                                    <td>{shipment.costPerKm}</td>
                                    <td>{shipment.totalPrice}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td><p>Carregando...</p></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Celulares</th>
                            <th>Custo Medio Celulares</th>
                            <th>Geladeiras</th>
                            <th>Custo Medio Geladeiras</th>
                            <th>Freezers</th>
                            <th>Custo Medio Freezers</th>
                            <th>Cadeiras</th>
                            <th>Custo Medio Cadeiras</th>
                            <th>Luminárias</th>
                            <th>Custo Medio Luminárias</th>
                            <th>Lavadoras de Roupa</th>
                            <th>Custo Medio Lavadoras de Roupa</th>
                            <th>Total de Itens</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shipmentsQuantity > 0 ? (
                            shipments.map((shipment, index) => (
                                <tr key={index}>
                                    <td>{`Transporte ${index + 1}`}</td>
                                    <td>{shipment.celular}</td>
                                    <td>{(((shipment.totalPrice)/shipment.totalItems)*shipment.celular).toFixed(2)}</td>
                                    <td>{shipment.geladeira}</td>
                                    <td>{(((shipment.totalPrice)/shipment.totalItems)*shipment.geladeira).toFixed(2)}</td>
                                    <td>{shipment.freezer}</td>
                                    <td>{(((shipment.totalPrice)/shipment.totalItems)*shipment.freezer).toFixed(2)}</td>
                                    <td>{shipment.cadeira}</td>
                                    <td>{(((shipment.totalPrice)/shipment.totalItems)*shipment.cadeira).toFixed(2)}</td>
                                    <td>{shipment.luminaria}</td>
                                    <td>{(((shipment.totalPrice)/shipment.totalItems)*shipment.luminaria).toFixed(2)}</td>
                                    <td>{shipment.lavadora}</td>
                                    <td>{(((shipment.totalPrice)/shipment.totalItems)*shipment.lavadora).toFixed(2)}</td>
                                    <td>{shipment.totalItems}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td><p>Carregando...</p></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Caminhao Pequeno</th>
                            <th>Custo Caminhao Pequeno</th>
                            <th>Caminhao Medio</th>
                            <th>Custo Caminhao Pequeno</th>
                            <th>Caminhao Grande</th>
                            <th>Custo Caminhao Pequeno</th>
                            <th>Total de caminhoes</th>

                        </tr>
                    </thead>
                    <tbody>
                    {shipmentsQuantity > 0 ? (
                            shipments.map((shipment, index) => (
                                <tr key={index}>
                                    <td>{`Transporte ${index + 1}`}</td>
                                    <td>{shipment.smallTruck}</td>
                                    <td>{(((shipment.totalPrice)/shipment.totalTrucks)*shipment.smallTruck).toFixed(2)}</td>
                                    <td>{shipment.mediumTruck}</td>
                                    <td>{(((shipment.totalPrice)/shipment.totalTrucks)*shipment.mediumTruck).toFixed(2)}</td>
                                    <td>{shipment.bigTruck}</td>
                                    <td>{(((shipment.totalPrice)/shipment.totalTrucks)*shipment.bigTruck).toFixed(2)}</td>
                                    <td>{shipment.totalTrucks}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td><p>Carregando...</p></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
