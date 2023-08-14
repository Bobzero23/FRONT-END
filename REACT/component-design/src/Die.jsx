import "./Die.css";

export default function Die({ val, color = "cyan" }) {
    return (
        <div className="Die" style={{ backgroundColor: color }}>
            {val}
        </div>
    )
}