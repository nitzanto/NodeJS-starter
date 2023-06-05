import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import App from "../App";
import axios from "axios";
import { Todo } from "./Todo";

export const TodoWrapper = ({ addTodo, todos, deleteTodo, changeTodo }) => {
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos && todos.length > 0 ? (
        todos.map((todo, index) => (
          <Todo task={todo} key={index} deleteTodo={deleteTodo} changeTodo={changeTodo} />
        ))
      ) : (
        <p>No todos found.</p>
      )}
    </div>
  );
};

