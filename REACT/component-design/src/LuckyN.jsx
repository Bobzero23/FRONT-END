import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";

function LuckyN({ numDice = 2, goal = 7 }) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = sum(dice) == goal;
    const Roll = () => setDice(getRolls(numDice));
    return (
        <main className="LuckyN">
            <h1>Lucky {goal} {isWinner && "You win!!"}</h1>
            <Dice dice={dice} />
            <button onClick={Roll}>Re-Roll Dice</button>
        </main>
    )
}

export default LuckyN;