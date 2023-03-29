/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('Teste de rendeziração dos componentes', () => {

  it('Verifica se o componente <Header /> foi renderizado.', () => {
    render(<App />);

    const header = screen.getByTestId("page-header");

    expect(header).toBeInTheDocument();
  });

  it('Verifica se o componente <ProductsTable /> foi renderizado.', async () => {
    render(<App />);

    const addShipmentBtn = screen.getByTestId("add-shipment-btn");
    await act(async () => {
      await userEvent.click(addShipmentBtn);
    });

    const productsTableContainer = screen.getByTestId("products-table-container");
    expect(productsTableContainer).toBeInTheDocument();
  });

  it('Verifica se o componente <AddShipmentComponent /> foi renderizado.', async () => {
    render(<App />);

    const addShipmentBtn = screen.getByTestId("add-shipment-btn");
    await act(async () => {
      await userEvent.click(addShipmentBtn)
    });
    ;

    const addShipmentContainer = screen.getByTestId("add-shipment-container");
    expect(addShipmentContainer).toBeInTheDocument();
  });

  it('Verifica se o componente <StopsComponent /> foi renderizado.', async () => {
    render(<App />);

    const addShipmentBtn = screen.getByTestId("add-shipment-btn");
    await act(async () => {
      await userEvent.click(addShipmentBtn);
    });


    const stopsComponentContainer = screen.getByTestId("stops-component-container");
    expect(stopsComponentContainer).toBeInTheDocument();
  });

  it('Verifica se o componente <ReportsTable /> foi renderizado.', async () => {
    render(<App />);

    const reportsBtn = screen.getByTestId("reports-btn");
    await act(async () => {
      await userEvent.click(reportsBtn);
    });

    const reportsTableContainer = screen.getByTestId("reports-table-container");
    expect(reportsTableContainer).toBeInTheDocument();
  });
});
