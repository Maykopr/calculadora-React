import React, { useState } from 'react'
import './App.css'
import './backspace-fill.svg'
import Tela from './components/Tela'
import Buttons from './components/Buttons'

export default function App() {

  const [valorTela, setValorTela] = useState('');
  const [resultado, setResultado] = useState(0);
  const [eoperado, setEoperado] = useState(false);


  return (
    <div className="App">
      <Tela v={valorTela} r={resultado} />
      <Buttons v={valorTela} setV={setValorTela} r={resultado} setR={setResultado} o={eoperado} setO={setEoperado} />
    </div>
  );
}