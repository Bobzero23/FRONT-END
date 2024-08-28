import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="Enter a todo"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
