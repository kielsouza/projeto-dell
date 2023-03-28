import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';



describe('Testa a pagina /addshipment', () => {
    beforeEach(async () => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<App />);

        const reportsBtn = screen.getByTestId("reports-btn");
        await userEvent.click(reportsBtn);
    });

    it('Verifica se o relatório 1 foi renderizado.', () => {

        const reportsTable1 = screen.getByTestId('reports-table-1').innerHTML;
        const loading = screen.getByTestId('loading');

        expect(reportsTable1).toContain('Origem');
        expect(reportsTable1).toContain('Custo medio por km');
        expect(reportsTable1).toContain('Custo Total');
        expect(loading).toBeInTheDocument();
    });

    it('Verifica se o relatório 2 foi renderizado.', () => {

        const reportsTable2 = screen.getByTestId('reports-table-2').innerHTML;
        const loading = screen.getByTestId('loading');

        expect(reportsTable2).toContain('Celulares');
        expect(reportsTable2).toContain('Custo Medio Celulares');
        expect(reportsTable2).toContain('Geladeiras');
        expect(reportsTable2).toContain('Custo Medio Geladeiras');
        expect(reportsTable2).toContain('Freezers');
        expect(reportsTable2).toContain('Custo Medio Freezers');
        expect(reportsTable2).toContain('Cadeiras');
        expect(reportsTable2).toContain('Custo Medio Cadeiras');
        expect(reportsTable2).toContain('Luminárias');
        expect(reportsTable2).toContain('Custo Medio Luminárias');
        expect(reportsTable2).toContain('Lavadoras de Roupa');
        expect(reportsTable2).toContain('Custo Medio Lavadoras de Roupa');
        expect(reportsTable2).toContain('Total de Itens');
        expect(loading).toBeInTheDocument();

    });

    it('Verifica se o relatório 3 foi renderizado.', () => {

        const reportsTable3 = screen.getByTestId('reports-table-3').innerHTML;
        const loading = screen.getByTestId('loading');

        expect(reportsTable3).toContain('Caminhao Pequeno');
        expect(reportsTable3).toContain('Custo Caminhao Pequeno');
        expect(reportsTable3).toContain('Caminhao Medio');
        expect(reportsTable3).toContain('Custo Caminhao Pequeno');
        expect(reportsTable3).toContain('Caminhao Grande');
        expect(reportsTable3).toContain('Custo Caminhao Pequeno');
        expect(reportsTable3).toContain('Total de caminhoes');
        expect(loading).toBeInTheDocument();
    });

});
