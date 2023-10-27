import { useEffect } from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("");

    useEffect(function message() {
        console.log("state changed");
    }, [count])

    const handleClick = () => {
        setCount((c) => {
            return c + 1;
        })
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>+1</button>
            <p>{name}</p>
            <input 
            type="text" 
            name="name" 
            placeholder="Enter a name"
            onChange={handleChange} 
            value={name}/>
        </div>
    );
}


export default Counter;