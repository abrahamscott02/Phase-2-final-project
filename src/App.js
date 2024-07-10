import React, { useState, useEffect } from 'react';
// Importing Router components from react-router-dom to handle client-side routing.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
import CreateToDo from './components/CreateToDo';
import CompletedToDoList from './components/CompletedToDoList';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]); // State for list of to-do items
    const [completedTasks, setCompletedTasks] = useState([]); // State for completed to-do items

    useEffect(() => {
        fetch('http://localhost:3000/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);

    const addToDo = (newToDo) => {
        setTodos([...todos, newToDo]); // Add new to-do to the list
    };

    const deleteToDo = (id) => {
        fetch(`http://localhost:3000/todos/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => {
            if (!res.ok) {
              console.error(`Failed to delete todo. Status: ${res.status}`);
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
          .then(() => {
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
          })
          .catch(error => console.error('Error deleting todo:', error));
      };
    
    const markComplete = (todoId) => {
        // Find the to-do item with the matching id
        const todo = todos.find(t => t.id === todoId);
    
        // Add the completed to-do to the completedTasks state
        setCompletedTasks([...completedTasks, todo]);
    
        // Update the todos state by filtering out the completed to-do
        setTodos(todos.filter(todo => todo.id !== todoId));
    };

    const clearCompleted = () => {
        completedTasks.forEach(task => {
            fetch(`http://localhost:3000/todos/${task.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(() => {
                setTodos(prevTodos => prevTodos.filter(todo => todo.id !== task.id));
            })
        });
        setCompletedTasks([]);
    }

    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<ToDoList todos={todos} onComplete={markComplete} deleteToDo={deleteToDo} />} />
                    <Route path="/create" element={<CreateToDo onAdd={addToDo} />} />
                    <Route path="/completed" element={<CompletedToDoList completedTasks={completedTasks} clearCompleted={clearCompleted} />} />
                </Routes>
            </div>  
        </Router>
    );
};

export default App;
