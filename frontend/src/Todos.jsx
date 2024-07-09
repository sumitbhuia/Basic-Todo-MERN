import React from 'react';
import { CheckboxComponent } from "./CheckboxComp";

export function Todos({ todos }) {
  const handleDelete = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/todos/delete", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-type": "application/json" },
      });
      const json = await response.json();
      console.log('Todo deleted:', json);
      // You might want to update the local state or trigger a refetch here
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo._id} className="todo-box">
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
          <div className="todo-actions">
            <CheckboxComponent it={todo} />
            <button className="delete-btn" onClick={() => handleDelete(todo._id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}
