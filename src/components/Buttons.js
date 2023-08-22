

export default function Buttons(props) {

    const Btn = (label, onCLick, id) => {
        return (
            <button id={id} className="btn btn-secondary" onClick={onCLick}>{label}</button>
        )
    }
    const BtnOperator = (label, onCLick, id) => {
        return (
            <button id={id} className="btn btn-primary" onClick={onCLick}>{label}</button>
        )
    }

    const addDigit = (d) => {
        const regexOperators = /[+\-*/]/;
        const lastDigit = props.value.substring(props.value.length - 1);

        if (props.value.length > 11) {
            return
        };
        if ((d === '-') && (lastDigit !== '-') && (regexOperators.test(lastDigit))) {
            props.setValue(props.value + d);
            return
        }
        //if we type an operator and the screen is zero, we create a zero before
        if ((regexOperators.test(d)) && props.value === '0') {
            props.setValue('0' + d)
            return
        };
        //if we type an operator and an operator already exists they are exchanged
        if ((regexOperators.test(d)) && (regexOperators.test(lastDigit))) {
            let operation = props.value.substring(0, props.value.length - 1);
            if (regexOperators.test(operation.substring(operation.length - 1))) {
                props.setValue(operation.substring(0, operation.length - 1) + d);
                return
            }
            props.setValue(operation + d);
            return
        };
        //if we type an operator the result is concatenated to the next operation
        if ((regexOperators.test(d)) && props.equal) {
            props.setEqual(false)
            props.setMemory(props.value)
            props.setValue(props.value + d)
            return
        };

        //treatment about "."
        if (d === ".") {
            const factor = props.value.split(regexOperators);
            const lastFactor = factor[factor.length - 1]
            if (lastFactor.indexOf('.') !== - 1) {
                return
            }
            if (regexOperators.test(lastDigit)) {
                props.setValue(props.value + '0' + d)
                return
            }
            if (props.equal || props.value === '0') {
                props.setValue('0' + d)
                return
            }
        };

        //if we type a number after the result, it is replaced by the new number
        if (props.equal) {
            props.setMemory(props.value)
            props.setValue(d)
            props.setEqual(false)
            return
        };

        if (props.value === '0') {
            props.setValue(d)
            return
        }

        const valorDigitadoTela = props.value + d;
        props.setValue(valorDigitadoTela);
    }


    const clear = () => {
        props.setEqual(false)
        props.setValue('0')
        props.setMemory('')
        return
    }

    const operation = (oper) => {
        if (oper === "backSpace") {
            let valueScreen = props.value
            valueScreen = valueScreen.substring(0, (valueScreen.length - 1))
            props.setValue(valueScreen)
            props.setEqual(false)
            return
        }
        try {
            const result = eval(props.value)
            let resultUpdate = result.toString()
            if (resultUpdate.length > 15) {
                resultUpdate = resultUpdate.substring(0, 15)
            }
            props.setValue(resultUpdate);
            props.setEqual(true)
        } catch {
            props.setMemory('ERRO')
        }
    }
    return (
        <div className='buttons'>
            {BtnOperator('AC', clear, 'clear')}
            {BtnOperator(<i className="bi bi-backspace-fill"></i>, () => operation('backSpace'), 'backSpace')}
            {BtnOperator('(', () => addDigit('('), 'right')}
            {BtnOperator(')', () => addDigit(')'), 'left')}
            {Btn('7', () => addDigit('7'), 'seven')}
            {Btn('8', () => addDigit('8'), 'eight')}
            {Btn('9', () => addDigit('9'), 'nine')}
            {BtnOperator('/', () => addDigit('/'), 'divide')}
            {Btn('4', () => addDigit('4'), 'four')}
            {Btn('5', () => addDigit('5'), 'five')}
            {Btn('6', () => addDigit('6'), 'six')}
            {BtnOperator('x', () => addDigit('*'), 'multiply')}
            {Btn('1', () => addDigit('1'), 'one')}
            {Btn('2', () => addDigit('2'), 'two')}
            {Btn('3', () => addDigit('3'), 'three')}
            {BtnOperator('-', () => addDigit('-'), 'subtract')}
            {Btn('0', () => addDigit('0'), 'zero')}
            {Btn('.', () => addDigit('.'), 'decimal')}
            {BtnOperator('=', () => operation('='), 'equals')}
            {BtnOperator('+', () => addDigit('+'), 'add')}
        </div>
    )
}

