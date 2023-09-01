import "./Button.css"

export default function Button({clickFunc, label}) {
    return (
        <button onClick={clickFunc} className="Button">{label}</button>
    )
}