import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>+1</button>
        </div>
    )
}