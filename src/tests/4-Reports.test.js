import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('ReportsTable', () => {
    var mockLocalStorage = {
        shipments: 3,
        shipment1: JSON.stringify({
            bigTruck: "1",
            cadeira: null,
            celular: null,
            costPerKm: "66.15",
            costStop1: "26989.20",
            freezer: "190",
            geladeira: null,
            lavadora: null,
            luminaria: null,
            mediumTruck: "2",
            origin: "SAO PAULO",
            smallTruck: "1",
            stop1: "CURITIBA",
            totalItems: 190,
            totalPrice: "26989.20",
            totalTrucks: "4",
        }),
        shipment2: JSON.stringify({
            bigTruck: "2",
            cadeira: "4",
            celular: "1",
            costPerKm: "84.61",
            costStop1: "60587.92",
            costStop2: "189971.90",
            freezer: "190",
            geladeira: "2",
            lavadora: "23",
            luminaria: "5",
            mediumTruck: "0",
            origin: "BELO HORIZONTE",
            smallTruck: "2",
            stop1: "BRASILIA",
            stop2: "JOAO PESSOA",
            totalItems: 225,
            totalPrice: "250559.82",
            totalTrucks: "4",
        }),
        shipment3: JSON.stringify({
            bigTruck: "8",
            cadeira: "98",
            celular: "73",
            costPerKm: "328.22",
            costStop1: "1964456.55",
            costStop2: "97484.31",
            costStop3: "767401.74",
            costStop4: "142451.82",
            costStop5: "712587.33",
            freezer: "60",
            geladeira: "18",
            lavadora: "672",
            luminaria: null,
            mediumTruck: "2",
            origin: "MANAUS",
            smallTruck: "1",
            stop1: "RECIFE",
            stop2: "RECIFE",
            stop3: "RIO DE JANEIRO",
            stop4: "BELO HORIZONTE",
            stop5: "JOAO PESSOA",
            totalItems: 921,
            totalPrice: "3684381.75",
            totalTrucks: "11",
        })
    };

    beforeEach(() => {
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: (key) => mockLocalStorage[key],
                setItem: (key, value) => {
                    mockLocalStorage[key] = value.toString();
                },
                removeItem: (key) => {
                    delete mockLocalStorage[key];
                },
                clear: () => {
                    mockLocalStorage = {};
                }
            },
            writable: true
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Verifica se a tabela 1 está sendo populada corretamente.', async () => {
        /* render(<App />);

        const reportsButton = screen.getByTestId("reports-btn");
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            userEvent.click(reportsButton);
        });
        
        const table1Line1 = screen.getByTestId('reports-table-1-line-1').innerHTML;
        const table1Line2 = screen.getByTestId('reports-table-1-line-2').innerHTML;
        const table1Line3 = screen.getByTestId('reports-table-1-line-3').innerHTML;

        console.log(table1Line3);
        expect(table1Line1).toContain('Transporte 1');
        expect(table1Line1).toContain('SAO PAULO');
        expect(table1Line1).toContain('CURITIBA');
        expect(table1Line1).toContain('R$&nbsp;26.989,20');
        expect(table1Line1).toContain('R$&nbsp;66,15');
        expect(table1Line2).toContain('Transporte 2');
        expect(table1Line2).toContain('BELO HORIZONTE');
        expect(table1Line2).toContain('JOAO PESSOA');
        expect(table1Line2).toContain('BRASILIA');
        expect(table1Line2).toContain('R$&nbsp;189.971,90');
        expect(table1Line2).toContain('R$&nbsp;84,61');
        expect(table1Line2).toContain('R$&nbsp;250.559,82'); */
        
    });
});