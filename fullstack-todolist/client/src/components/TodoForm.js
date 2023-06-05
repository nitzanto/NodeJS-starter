import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {
  // string
  const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // So the browser won't reload after submitting a form (task)
        addTodo(value)
        setValue("") // Resetting the value after adding a task
    }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What`s the the task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
