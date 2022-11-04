
export default function Tela(props) {
    const Tela = (valor, result) => {
        return (
            <div>
                <p class="memory">{valor}</p>
                <p class="result">{result}</p>
            </div>
        )
    }
    return (
        <div className="tela">
            {Tela(props.v, props.r)}
        </div>
    )
}