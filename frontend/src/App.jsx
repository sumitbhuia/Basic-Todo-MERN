import React, { useState, useEffect } from 'react';
import './App.css';
import { Component } from './Component';
import { Todos } from './Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = () => {
      fetch("http://localhost:3000/todos/")
        .then(async (res) => {
          const json = await res.json();
          setTodos(json.allTodo);
        })
        .catch(error => console.error('Error fetching todos:', error));
    };

    fetchTodos(); // Fetch immediately on mount
    const intervalId = setInterval(fetchTodos, 5000); // Then every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className='app-container'>
      <div className='add-todo-form'>
        <Component />
      </div>
      <div className='todos-container'>
        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;
