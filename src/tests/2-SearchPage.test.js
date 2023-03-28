import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Testa a pagina /', () => {
  it('Verifica se os selects foram renderizados corretamente.', () => {
    render(<App />);

    const citiesOptionLength = screen.getAllByTestId("cities-option");
    expect(citiesOptionLength).toHaveLength(48);
  });

  it('Verifica se os inputs do usuario alteram a resposta do sistema.', async () => {
    render(<App />);

    const sysAnswer = screen.getByTestId("sys-answer").innerHTML;
    expect(sysAnswer).toBe("De ARACAJU para ARACAJU, utilizando um Caminhão de pequeno porte (1 Ton), a distância é de 0 km e o custo será de R$ 0.00.");
    
    const selectCity1 = screen.getByTestId("city-1-input");
    fireEvent.change(selectCity1, { target: { value: "CUIABA" } });
    const selectCity2 = screen.getByTestId("city-2-input");
    fireEvent.change(selectCity2, { target: { value: "MANAUS" } });
    const selectTruck = screen.getByTestId("truck-input");
    fireEvent.change(selectTruck, { target: { value: "Caminhão de médio porte (4 Ton)" } });
    await new Promise((r) => setTimeout(r, 1000));
    const newSysAnswer = await screen.getByTestId("sys-answer").innerHTML;
    expect(newSysAnswer).toBe("De CUIABA para MANAUS, utilizando um Caminhão de médio porte (4 Ton), a distância é de 2357 km e o custo será de R$ 28095.44.");
  });
});
