import { useState } from "react";

function Counter() {
    const [num, setNum] = useState(5);

    const changeNum = () => {
        setNum(num + 1);
    }

    return (
        <div>
            <p style={{ color: "black" }}>The count is: {num}</p>
            <button onClick={changeNum}>Incerement</button>
        </div>
    );
}

export default Counter;