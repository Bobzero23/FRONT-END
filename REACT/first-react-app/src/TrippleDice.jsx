export default function TrippleDice({ value1, value2, value3 }) {
    const isWinner = value1 === value2 && value1 === value3;

    return (
        <div>
            <p>{value1} {value2} {value3}</p>
            <h2 style={{ color: isWinner ? "green" : "red" }}>{isWinner ? "You Win" : "You Lose"}</h2>
            {isWinner && <h3 style={{ color: "blue" }}>Congrats</h3>}
        </div >
    );
}   