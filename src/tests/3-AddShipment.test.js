import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';



describe('Testa a pagina /addshipment', () => {
    beforeEach(async () => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<App />);

        const addShipmentBtn = screen.getByTestId("add-shipment-btn");
        await userEvent.click(addShipmentBtn);
    });

    it('Verifica se a tabela de produtos foi renderizada corretamente.', () => {

        const productsTable = screen.getByTestId('products-table').innerHTML;
        const phoneQuantity = screen.getByTestId('celular-quantity').value;
        const refrigeratorQuantity = screen.getByTestId('geladeira-quantity').value;
        const freezerQuantity = screen.getByTestId('freezer-quantity').value;
        const chairQuantity = screen.getByTestId('cadeira-quantity').value;
        const lampQuantity = screen.getByTestId('luminaria-quantity').value;
        const washerQuantity = screen.getByTestId('luminaria-quantity').value;
        

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

    it('Verifica se a tabela de caminhões foi renderizada corretamente.', () => {

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

});
