import React, { useState } from 'react';

function VerificaFibonacci() {
  const [numero, setNumero] = useState('');
  const [mensagem, setMensagem] = useState('');

  function ehFibonacci(n) {
    let a = 0, b = 1;
    while (b < n) {
      [a, b] = [b, a + b];
    }
    return n === 0 || b === n;
  }

  function verificar() {
    const num = parseInt(numero);
    if (isNaN(num)) {
      setMensagem('Digite um número válido.');
      return;
    }
    setMensagem(ehFibonacci(num)
      ? `${num} pertence à sequência de Fibonacci.`
      : `${num} não pertence à sequência de Fibonacci.`);
  }

  return (
    <div>
      <h2>Questão 2 - Verifica Fibonacci</h2>
      <input type="number" value={numero} onChange={e => setNumero(e.target.value)} />
      <button onClick={verificar}>Verificar</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default VerificaFibonacci;
