

export default function Buttons(props) {

    const Btn = (label, onCLick) => {
        return (
            <button className="btn btn-secondary" onClick={onCLick}>{label}</button>
        )
    }
    const BtnOperator = (label, onCLick) => {
        return (
            <button className="btn btn-primary" onClick={onCLick}>{label}</button>
        )
    }
    const addDigitoTela = (d) => {

        if (props.v.length > 18) {
            return
        }
        let ultimoDigito = props.v.substring(props.v.length - 1);
        //se digitamos um operador e a tela está zerada criamos um zero antes
        if ((d === "+" || d === "-" || d === "*" || d === "/" || d === ",") && props.v === '') {
            props.setV('0' + d)
            return
        }
        //se digitamos um operador e já existe um operador ele é trocado
        if ((d === "+" || d === "-" || d === "*" || d === "/") &&
            (ultimoDigito === "+" || ultimoDigito === "-" || ultimoDigito === "*" || ultimoDigito === "/")) {
            props.setV(props.v.substring(0, props.v.length - 1) + d);
            return
        }
        //se digitamos um operador o resultado é concatenado para a proxima operação
        if ((d === "+" || d === "-" || d === "*" || d === "/") && props.o) {
            props.setO(false)
            props.setV(props.r + d)
            return
        }

        //evita duplicar o ponto
        if (d === ",") {
            let fatores = props.v.split(new RegExp('[-| +|*| /]'));
            let ultimoFator = fatores.length - 1
            if (fatores[ultimoFator].indexOf(',') !== - 1) {
                return
            }
            if (props.v.substring(props.v.length - 1) === '+') {
                props.setV(props.v + '0' + d)
                return
            }
        }

        //se digitamos um numero o resultado é substituído
        if (props.o) {
            props.setV(d)
            props.setO(false)
            return
        }
        const valorDigitadoTela = props.v + d
        props.setV(valorDigitadoTela)
    }
    const limparMemoria = () => {
        props.setO(false)
        props.setV('')
        props.setR(0)
        return
    }

    const Operacao = (oper) => {
        if (oper === "bs") {
            let vtela = props.v
            vtela = vtela.substring(0, (vtela.length - 1))
            props.setV(vtela)
            props.setO(false)
            return
        }
        try {
            const r = eval(props.v.replace(/,/g, '.'))
            let y = r.toString().replace('.', ',')
            if (y.length > 15) {
                y = y.substring(0, 15)
            }
            props.setR(y)
            props.setO(true)
        } catch {
            props.setR('ERRO')
        }
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