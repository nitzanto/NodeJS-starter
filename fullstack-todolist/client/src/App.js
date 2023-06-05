import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { TodoWrapper } from "./components/TodoWrapper";

function App() {
  const [todos, setTodos] = useState([]);

  const backEndConnection = async () => {
    try {
      const res = await axios.get("/api/todos");
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
    }
  };

  const addTodo = async (title) => {
    try {
      const res = await axios.post("/api/todos", { title });
      setTodos(res.data.todos);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    try {                                             // req body
      const res = await axios.delete(`/api/todos/${id}`, id)
      console.log(res.data); // Check the response data
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
    }
  };

  const changeTodo = async(id, done) => {
    try{                                         
      const res = await axios.put(`/api/todos/${id}`)
      console.log(res.data);
      setTodos(res.data.todos);
    }catch(err){

    }
  }

  useEffect(() => {
    backEndConnection();
  }, []);

  return (
    <div className="App">
      <TodoWrapper addTodo={addTodo} todos={todos} deleteTodo={deleteTodo} changeTodo={changeTodo} />
    </div>
  );
}

export default App;
