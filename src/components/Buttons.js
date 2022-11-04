import React, { useState } from 'react'

export default function Buttons() {
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
    return (
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
    )
}