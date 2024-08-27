import { useReducer, useState } from "react";
import "./App.css";

function reducer(state, action) {
  return { count: state.count + 1 };
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function increment() {
    dispatch();
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{state.count}</span>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </div>
  );
}

export default App;
