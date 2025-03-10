import React from 'react';
import SomaAte13 from './SomaSimples';
import VerificaFibonacci from './VerificaFibonacci';
import AnalisaFaturamento from './AnalisaFaturamento';
import PercentualPorEstado from './PercentualPorEstado';
import Inversor from './Inversor';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Desafio de Lógica - React</h1>
      <SomaAte13 />
      <VerificaFibonacci />
      <AnalisaFaturamento />
      <PercentualPorEstado />
      <Inversor />
    </div>
  );
}

export default App;
