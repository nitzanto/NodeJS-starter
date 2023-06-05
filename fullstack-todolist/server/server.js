const express = require("express");
const app = express();
let { Todos } = require("./models/Todos");
const { v4: uuidv4 } = require("uuid");

// parsing the json
app.use(express.json());

// parsing data
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome").status(200);
});

app.get("/api/todos", (req, res) => {
  res.status(200).json({ success: true, todos: Todos });
});

app.get("/api/todos/:id", (req, res) => {
  const { id } = req.params;

  const aTodo = Todos.find((e) => e.id === Number(id));
  if (!aTodo)
    return res
      .status(404)
      .json({ success: false, msg: `No todo item with id ${id}` });

  return res.status(200).json({ success: true, todos: aTodo });
});

app.post("/api/todos/", (req, res) => {
  const { title } = req.body;

  // Creating a new todo item
  const newTodo = {
    id: uuidv4(),
    title,
    done: false,
  };

  // Adding the new todo item to the existing Todos array
  Todos.push(newTodo);

  // Send a response indicating the new todo item was created successfully
  res.status(201).json({ success: true, todos: Todos });
});

app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;

  const aTodo = Todos.find((e) => e.id === id);
  if (!aTodo)
    return res
      .status(404)
      .json({ success: false, msg: `No todo item with id ${id}`});

  const newTodoList = Todos.map((item) => {
    if (item.id === id)
      item.done = !item.done

    // Adding all of the items to the todo-list 
    return item;
  });

  Todos = newTodoList;

  // or find the index and just Todos[todoIndex].done = !Todos[todoIndex[].done

  res.status(200).json({ success: true, todos: Todos });
});

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;

  const index = Todos.findIndex((e) => e.id === id);
  if (index === -1)
    return res
      .status(404)
      .json({ success: false, msg: `No todo item with id ${id}` });

  //Deleting the todo item
  const newTodos = Todos.filter((todo) => todo.id !== id);

  Todos = newTodos;

  return res.status(200).json({ success: true, todos: Todos });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
