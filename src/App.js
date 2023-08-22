import React, { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'

export default function App() {

  const [valueScreen, setValueScreen] = useState('0');
  const [result, setResult] = useState('');
  const [equalIsPressed, setEqualIsPressed] = useState(false);


  return (
    <div className="App">
      <Display value={valueScreen} result={result} />
      <Buttons value={valueScreen} setValue={setValueScreen} result={result} setResult={setResult} equal={equalIsPressed} setEqual={setEqualIsPressed} />
    </div>
  );
}
