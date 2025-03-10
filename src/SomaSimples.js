import React from 'react';

function SomaAte13() {
  let soma = 0;
  for (let i = 1; i <= 13; i++) {
    soma += i;
  }

  return (
    <div>
      <h2>Questão 1 - Soma até 13</h2>
      <p>Resultado da soma: {soma}</p>
    </div>
  );
}

export default SomaAte13;
