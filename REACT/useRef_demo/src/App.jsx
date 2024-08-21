import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const previousName = useRef("");

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} but it used to be {previousName.current}
      </div>
    </>
  );
}

export default App;
