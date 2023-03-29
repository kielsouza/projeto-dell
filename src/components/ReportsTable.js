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

    getShipmentObj = async () => { // função para buscar a quantidade de paradas, transportes e o objeto de transporte
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
            <div data-testid="reports-table-container">
                <table data-testid="reports-table-1" className="table">
                    <thead className="table-header">
                        <tr>
                            <th className="header-item"></th>
                            <th className="header-item">Origem</th>
                            {sumStops.map((index) => (
                                <React.Fragment key={index}>
                                    <th className="header-item">{`Parada ${index + 1}`}</th>
                                    <th className="header-item">{`Custo Parada ${index + 1}`}</th>
                                </React.Fragment>
                            ))}
                            <th className="header-item">Custo medio por km</th>
                            <th className="header-item">Custo Total</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {shipmentsQuantity > 0 ? (
                            shipments.map((shipment, index) => (
                                <tr data-testid={`reports-table-1-line-${index + 1}`} className="table-row" key={index}>
                                    <td className="body-item">{`Transporte ${index + 1}`}</td>
                                    <td className="body-item">{shipment.origin}</td>
                                    {sumStops.map((index) => (
                                        <React.Fragment key={index}>
                                            <td className="body-item">{shipment[`stop${index + 1}`]}</td>
                                            <td className="body-item">{Number(shipment[`costStop${index + 1}`]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                        </React.Fragment>
                                    ))}
                                    <td className="body-item">{Number(shipment.costPerKm).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    <td className="body-item">{Number(shipment.totalPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td><p>Carregando...</p></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <table data-testid="reports-table-2" className="table">
                    <thead className="table-header">
                        <tr>
                            <th className="header-item"></th>
                            <th className="header-item">Celulares</th>
                            <th className="header-item">Custo Medio Celulares</th>
                            <th className="header-item">Geladeiras</th>
                            <th className="header-item">Custo Medio Geladeiras</th>
                            <th className="header-item">Freezers</th>
                            <th className="header-item">Custo Medio Freezers</th>
                            <th className="header-item">Cadeiras</th>
                            <th className="header-item">Custo Medio Cadeiras</th>
                            <th className="header-item">Luminárias</th>
                            <th className="header-item">Custo Medio Luminárias</th>
                            <th className="header-item">Lavadoras de Roupa</th>
                            <th className="header-item">Custo Medio Lavadoras de Roupa</th>
                            <th className="header-item">Total de Itens</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {shipmentsQuantity > 0 ? (
                            shipments.map((shipment, index) => (
                                <tr className="table-row" key={index}>
                                    <td className="body-item">{`Transporte ${index + 1}`}</td>
                                    <td className="body-item">{shipment.celular}</td>
                                    <td className="body-item">{(((shipment.totalPrice) / shipment.totalItems) * shipment.celular).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    <td className="body-item">{shipment.geladeira}</td>
                                    <td className="body-item">{(((shipment.totalPrice) / shipment.totalItems) * shipment.geladeira).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    <td className="body-item">{shipment.freezer}</td>
                                    <td className="body-item">{(((shipment.totalPrice) / shipment.totalItems) * shipment.freezer).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    <td className="body-item">{shipment.cadeira}</td>
                                    <td className="body-item">{(((shipment.totalPrice) / shipment.totalItems) * shipment.cadeira).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    <td className="body-item">{shipment.luminaria}</td>
                                    <td className="body-item">{(((shipment.totalPrice) / shipment.totalItems) * shipment.luminaria).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    <td className="body-item">{shipment.lavadora}</td>
                                    <td className="body-item">{(((shipment.totalPrice) / shipment.totalItems) * shipment.lavadora).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    <td className="body-item">{shipment.totalItems}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td data-testid="loading"><p>Carregando...</p></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <table data-testid="reports-table-3" className="table">
                    <thead className="table-header">
                        <tr>
                            <th className="header-item"></th>
                            <th className="header-item">Caminhao Pequeno</th>
                            <th className="header-item">Custo Caminhao Pequeno</th>
                            <th className="header-item">Caminhao Medio</th>
                            <th className="header-item">Custo Caminhao Pequeno</th>
                            <th className="header-item">Caminhao Grande</th>
                            <th className="header-item">Custo Caminhao Pequeno</th>
                            <th className="header-item">Total de caminhoes</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {shipmentsQuantity > 0 ? (
                            shipments.map((shipment, index) => (
                                <tr className="table-row" key={index}>
                                    <td className="body-item">{`Transporte ${index + 1}`}</td>
                                    <td className="body-item">{shipment.smallTruck}</td>
                                    <td className="body-item">{(((shipment.totalPrice) / shipment.totalTrucks) * shipment.smallTruck).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    <td className="body-item">{shipment.mediumTruck}</td>
                                    <td className="body-item">{(((shipment.totalPrice) / shipment.totalTrucks) * shipment.mediumTruck).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    <td className="body-item">{shipment.bigTruck}</td>
                                    <td className="body-item">{(((shipment.totalPrice) / shipment.totalTrucks) * shipment.bigTruck).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                    <td className="body-item">{shipment.totalTrucks}</td>
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
