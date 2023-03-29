/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';

// colocar act em todos os user e fire events
// resolver problema do render dos caminhoes
describe('Testa a pagina /addshipment', () => {
    beforeEach(async () => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<App />);

        const addShipmentBtn = screen.getByTestId("add-shipment-btn");

        await act(async () => {
            userEvent.click(addShipmentBtn);
        });
    });

    it('Verifica se a tabela de produtos foi renderizada corretamente.', () => {

        const productsTable = screen.getByTestId('products-table').innerHTML;
        const phoneQuantity = screen.getByTestId('celular-quantity').value;
        const refrigeratorQuantity = screen.getByTestId('geladeira-quantity').value;
        const freezerQuantity = screen.getByTestId('freezer-quantity').value;
        const chairQuantity = screen.getByTestId('cadeira-quantity').value;
        const lampQuantity = screen.getByTestId('luminaria-quantity').value;
        const washerQuantity = screen.getByTestId('lavadora-quantity').value;


        expect(productsTable).toContain('Produto');
        expect(productsTable).toContain('Peso Unt.');
        expect(productsTable).toContain('Qtd.');
        expect(productsTable).toContain('Peso Total (Kg)');
        expect(productsTable).toContain('Celular');
        expect(productsTable).toContain('Geladeira');
        expect(productsTable).toContain('Freezer');
        expect(productsTable).toContain('Cadeira');
        expect(productsTable).toContain('Luminária');
        expect(productsTable).toContain('Lavadora de Roupa');
        expect(phoneQuantity).toBe("0");
        expect(refrigeratorQuantity).toBe("0");
        expect(freezerQuantity).toBe("0");
        expect(chairQuantity).toBe("0");
        expect(lampQuantity).toBe("0");
        expect(washerQuantity).toBe("0");
    });

    it('Verifica se a tabela de caminhões foi renderizada corretamente.', async () => {

        const phoneQuantity = screen.getByTestId('celular-quantity');

        await act(async () => {
            fireEvent.change(phoneQuantity, { target: { name: 'celular', value: '0' } });
        });

        const trucksTable = screen.getByTestId('trucks-table').innerHTML;
        const smallTrucksQuantity = screen.getByTestId('small-truck-quantity').innerHTML;
        const mediumTrucksQuantity = screen.getByTestId('medium-truck-quantity').innerHTML;
        const largeTrucksQuantity = screen.getByTestId('large-truck-quantity').innerHTML;
        const costPerKm = screen.getByTestId('cost-per-km').innerHTML;

        expect(trucksTable).toContain('Caminhoes Pequenos');
        expect(trucksTable).toContain('Caminhoes Medios');
        expect(trucksTable).toContain('Caminhoes Grandes');
        expect(trucksTable).toContain('Custo por km');
        expect(smallTrucksQuantity).toBe("0");
        expect(mediumTrucksQuantity).toBe("0");
        expect(largeTrucksQuantity).toBe("0");
        expect(costPerKm).toBe("R$&nbsp;0,00");
    });

    it('Verifica se a tabela de paradas foi renderizada corretamente.', () => {

        const stopsTable = screen.getByTestId('stops-table').innerHTML;
        const totalStops = screen.getByTestId('stop-last-line-total').innerHTML;
        const totalPrice = screen.getByTestId('stop-last-line-price').innerHTML;

        expect(stopsTable).toContain('Paradas');
        expect(stopsTable).toContain('Custo por trecho');
        expect(totalStops).toBe('Total: ');
        expect(totalPrice).toBe('R$&nbsp;0,00');
    });

    it('Verifica se a os selects de paradas foram renderizados corretamente.', () => {

        const selectCity1 = screen.getByTestId("city-1-input");
        const selectCity2 = screen.getByTestId("city-2-input");

        expect(selectCity1).toBeInTheDocument();
        expect(selectCity2).toBeInTheDocument();
    });

    it('Verifica se o peso dos produtos é calculado corretamente.', async () => {

        const phoneQuantity = screen.getByTestId('celular-quantity');
        const refrigeratorQuantity = screen.getByTestId('geladeira-quantity');
        const freezerQuantity = screen.getByTestId('freezer-quantity');
        const chairQuantity = screen.getByTestId('cadeira-quantity');
        const lampQuantity = screen.getByTestId('luminaria-quantity');
        const washerQuantity = screen.getByTestId('lavadora-quantity');

        await act(async () => {
            fireEvent.change(phoneQuantity, { target: { name: 'celular', value: '1' } });
            fireEvent.change(refrigeratorQuantity, { target: { name: 'geladeira', value: '2' } });
            fireEvent.change(freezerQuantity, { target: { name: 'freezer', value: '3' } });
            fireEvent.change(chairQuantity, { target: { name: 'cadeira', value: '4' } });
            fireEvent.change(lampQuantity, { target: { name: 'luminaria', value: '5' } });
            fireEvent.change(washerQuantity, { target: { name: 'lavadora', value: '6' } });
        });


        // eslint-disable-next-line testing-library/no-node-access
        const totalWeight = (screen.getByText('Toneladas:').nextSibling).innerHTML;
        expect(totalWeight).toBe('1.1645');
    });

    it('Verifica se os caminhões são distribuidos corretamente.', async () => {

        const freezerQuantity = screen.getByTestId('freezer-quantity');
        await act(async () => {
            fireEvent.change(freezerQuantity, { target: { name: 'freezer', value: '190' } });
        });


        // eslint-disable-next-line testing-library/no-node-access
        const totalWeight = screen.getByTestId('total-weight').innerHTML;
        expect(totalWeight).toBe('19.0000');

        const smallTrucks = screen.getByTestId('small-truck-quantity').innerHTML;
        const mediumTrucks = screen.getByTestId('medium-truck-quantity').innerHTML;
        const largeTrucks = screen.getByTestId('large-truck-quantity').innerHTML;
        const costPerKm = screen.getByTestId('cost-per-km').innerHTML;

        expect(smallTrucks).toBe('1');
        expect(mediumTrucks).toBe('2');
        expect(largeTrucks).toBe('1');
        expect(costPerKm).toBe('R$&nbsp;66,15');
    });

    it('Verifica se as paradas são adicionadas na tabela corretamente.', async () => {

        const freezerQuantity = screen.getByTestId('freezer-quantity');
        await act(async () => {
            fireEvent.change(freezerQuantity, { target: { name: 'freezer', value: '190' } });
        });

        const city1Input = screen.getByTestId('city-1-input');
        const city2Input = screen.getByTestId('city-2-input');
        const addStopButton = screen.getByTestId('add-stop-button');

        await act(async () => {
            fireEvent.change(city1Input, { target: { value: 'ARACAJU' } });
            fireEvent.change(city2Input, { target: { value: 'BELEM' } });
            await userEvent.click(addStopButton);
        });

        const stopCitiesCell = screen.getByTestId('stop-table-line-1-cities');
        const pricePerStop = screen.getByTestId('stop-table-line-1-price');
        expect(stopCitiesCell).toHaveTextContent('1 - ARACAJU ---> BELEM');
        expect(pricePerStop).toHaveTextContent('137.525,85');
    });
});
