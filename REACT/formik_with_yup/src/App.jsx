import { useState } from "react";
import "./App.css";
import AdvancedForm from "./AdvancedForm";
import BasicForm from "./BasicForm";

function App() {
  const [view, setView] = useState("basic");
  return (
    <>
      <div className="App">
        <h3
          onClick={() => setView("basic")}
          style={{ padding: "5px", color: view === "basic" ? "white" : "gray" }}
        >
          Basic Form
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{
            padding: "5px",
            color: view === "advanced" ? "white" : "gray",
          }}
        >
          Avanced Form
        </h3>
      </div>
      {view === "advanced" ? <AdvancedForm /> : <BasicForm />}
    </>
  );
}

export default App;
