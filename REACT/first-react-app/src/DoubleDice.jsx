export default function DoubleDice() {
    const randNum1 = Math.floor(Math.random() * 2) + 1;
    const randNum2 = Math.floor(Math.random() * 2) + 1;
    const isWinner = randNum1 === randNum2;
    const styles = { color: isWinner ? "green" : "red" }
    return <>
        <div style={styles}>
            {isWinner ? <h1>You Win</h1> : <h1>You Lose</h1>}
            <p>Num1: {randNum1}</p>
            <p>Num1: {randNum2}</p>
        </div>
    </>
}