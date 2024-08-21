import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const renderedCount = useRef(1);

  useEffect(() => {
    renderedCount.current = renderedCount.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>You just typed: {name}</div>
      <div>Component rendered {renderedCount.current} times</div>
    </>
  );
}

export default App;
