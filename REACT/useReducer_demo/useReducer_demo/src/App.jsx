import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </div>
  );
}

export default App;
