import './Btn.css'

export function Button({text,fun}) {
    return (
        <button onClick={fun}>
            {text}
        </button>
    )
}