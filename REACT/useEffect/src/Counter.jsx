import { useEffect } from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(function message() {
        console.log("current count value is: " + count);
    })

    const handleClick = () => {
        setCount((c) => {
            return c + 1;
        })
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>+1</button>
        </div>
    );
}


export default Counter;