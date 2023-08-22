
export default function Display(props) {
    const Display = ({ value, result }) => {
        return (
            <div className="screen">
                <p className="memory">{result}</p>
                <p id='display' className="display">{value}</p>
            </div>
        )
    }
    return (
        <>
            {Display(props)}
        </>
    )
}
