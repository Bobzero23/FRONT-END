import { useState } from "react";
import "./ScoreKeeperEx.css"

export default function ScoreKeeperEx({ players, target }) {
    const [score, setScore] = useState(0);

    function addScore(id) {

    }

    return (
        <ul>
            {
                players.map((player, i) => {
                    const number = 0;
                    return <li key={i}>
                        {player}{i + 1}:
                        <span>{score}</span>
                        <button onClick={addScore}>+1</button>
                    </li>
                })
            }
        </ul>
    );
}

