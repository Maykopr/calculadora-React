import React, { useState } from 'react'
import './bootstrap.min.css'
import './App.css'
import './backspace-fill.svg'
// import Botoes from './components/Buttons'

export default function App() {

  const [valorTela, setValorTela] = useState('');
  const [resultado, setResultado] = useState(0);
  const [eoperado, setEoperado] = useState(false);

  //COMPONENTES
  const Tela = (valor, result) => {
    return (
      <div>
        <p class="memory">{valor}</p>
        <p class="result">{result}</p>
      </div>
    )
  }
  const Btn = (label, onCLick) => {
    return (
      <button class="btn btn-secondary" onClick={onCLick}>{label}</button>
    )
  }
  const BtnOperator = (label, onCLick) => {
    return (
      <button class="btn btn-primary" onClick={onCLick}>{label}</button>
    )
  }

  //FUNÇOES

  const addDigitoTela = (d) => {

    if (valorTela.length > 18) {
      return
    }
    let ultimoDigito = valorTela.substring(valorTela.length - 1);
    //se digitamos um operador e a tela está zerada criamos um zero antes
    if ((d === "+" || d === "-" || d === "*" || d === "/" || d === ",") && valorTela === '') {
      setValorTela('0' + d)
      return
    }
    //se digitamos um operador e já existe um operador ele é trocado
    if ((d === "+" || d === "-" || d === "*" || d === "/") &&
      (ultimoDigito === "+" || ultimoDigito === "-" || ultimoDigito === "*" || ultimoDigito === "/")) {
      setValorTela(valorTela.substring(0, valorTela.length - 1) + d);
      return
    }
    //se digitamos um operador o resultado é concatenado para a proxima operação
    if ((d === "+" || d === "-" || d === "*" || d === "/") && eoperado) {
      setEoperado(false)
      setValorTela(resultado + d)
      return
    }

    //evita duplicar o ponto
    if (d === ",") {
      let fatores = valorTela.split(new RegExp('[-| +|*| /]'));
      let ultimoFator = fatores.length - 1
      if (fatores[ultimoFator].indexOf(',') != - 1) {
        return
      }
      if (valorTela.substring(valorTela.length - 1) === '+') {
        setValorTela(valorTela + '0' + d)
        return
      }
    }

    //se digitamos um numero o resultado é substituído
    if (eoperado) {
      setValorTela(d)
      setEoperado(false)
      return
    }
    const valorDigitadoTela = valorTela + d
    setValorTela(valorDigitadoTela)
  }


  const limparMemoria = () => {
    setEoperado(false)
    setValorTela('')
    setResultado(0)
    return
  }

  const Operacao = (oper) => {
    if (oper === "bs") {
      let vtela = valorTela
      vtela = vtela.substring(0, (vtela.length - 1))
      setValorTela(vtela)
      setEoperado(false)
      return
    }
    try {
      const r = eval(valorTela.replace(/,/g, '.'))
      let y = r.toString().replace('.', ',')
      if (y.length > 15) {
        y = y.substring(0, 15)
      }
      setResultado(y)
      setEoperado(true)
    } catch {
      setResultado('ERRO')
    }
  }

  //====================
  return (
    <div className="App">
      <div className="tela">
        {Tela(valorTela, resultado)}
      </div>
      <div className='botoes'>
        {BtnOperator('AC', limparMemoria)}
        {BtnOperator(<i class="bi bi-backspace-fill"></i>, () => Operacao('bs'))}
        {BtnOperator('(', () => addDigitoTela('('))}
        {BtnOperator(')', () => addDigitoTela(')'))}
        {Btn('7', () => addDigitoTela('7'))}
        {Btn('8', () => addDigitoTela('8'))}
        {Btn('9', () => addDigitoTela('9'))}
        {BtnOperator('/', () => addDigitoTela('/'))}
        {Btn('4', () => addDigitoTela('4'))}
        {Btn('5', () => addDigitoTela('5'))}
        {Btn('6', () => addDigitoTela('6'))}
        {BtnOperator('x', () => addDigitoTela('*'))}
        {Btn('1', () => addDigitoTela('1'))}
        {Btn('2', () => addDigitoTela('2'))}
        {Btn('3', () => addDigitoTela('3'))}
        {BtnOperator('-', () => addDigitoTela('-'))}
        {Btn('0', () => addDigitoTela('0'))}
        {Btn(',', () => addDigitoTela(','))}
        {BtnOperator('=', () => Operacao('='))}
        {BtnOperator('+', () => addDigitoTela('+'))}

      </div>

    </div>
  );
}