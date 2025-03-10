import React, { useState } from 'react';

function Inversor() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  const inverter = () => {
    let invertido = '';
    for (let i = texto.length - 1; i >= 0; i--) {
      invertido += texto[i];
    }
    setResultado(invertido);
  };

  return (
    <div>
      <h2>Questão 5 - Inversor de String</h2>
      <input type="text" value={texto} onChange={e => setTexto(e.target.value)} />
      <button onClick={inverter}>Inverter</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Inversor;
