import React from 'react';

function PercentualPorEstado() {
  const estados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const total = Object.values(estados).reduce((a, b) => a + b, 0);

  return (
    <div>
      <h2>Questão 4 - Percentual por Estado</h2>
      <ul>
        {Object.entries(estados).map(([estado, valor]) => (
          <li key={estado}>
            {estado}: {(valor / total * 100).toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PercentualPorEstado;
