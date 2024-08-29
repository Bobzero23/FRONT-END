import React from "react";
import { ACTIONS } from "./App";

const Todo = ({ todo, dispatch }) => {
  function handleToggle() {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
  }
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button onClick={handleToggle}>Toggle</button>
      <button>Delete</button>
    </div>
  );
};

export default Todo;
