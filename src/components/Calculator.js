import React, { useState } from 'react';
import './Calculator.css';

function Calculadora() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const valorIMC = (peso / (altura * altura)).toFixed(2);
      setImc(valorIMC);
      obterMensagemIMC(valorIMC);
    }
  };

  const obterMensagemIMC = (imc) => {
    let msg = '';
    if (imc < 17) {
      msg = 'Muito abaixo do peso';
    } else if (imc < 18.49) {
      msg = 'Abaixo do peso';
    } else if (imc < 24.99) {
      msg = 'Normal';
    } else if (imc < 29.99) {
      msg = 'Acima do Peso';
    } else {
      msg = 'Obeso';
    }
    setMensagem(msg);
  };

  return (
    <div className="calculator">
      <h1>Calculadora de IMC</h1>
      <input
        type="number"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && <h2>Seu IMC é: {imc}</h2>}
      {mensagem && <h3>{mensagem}</h3>}
    </div>
  );
}

export default Calculadora;
