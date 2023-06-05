import React from 'react'

export const Todo = ({task, deleteTodo, changeTodo}) => {
  return (
    <div className="Todo">
        <p>{task.title}</p>
        <div>
            <button onClick ={() => changeTodo(task.id)}>Change</button>
            <button onClick={() => deleteTodo(task.id)}>Delete</button>
        </div>
    </div>
  )
}
