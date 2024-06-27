import React, { useState, useEffect } from 'react';
// Importing React and its hooks: useState for managing state, and useEffect for side effects (like data fetching).

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importing Router components from react-router-dom to handle client-side routing.

import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
import CreateToDo from './components/CreateToDo';
import DeleteToDo from './components/DeleteToDo';
import CompletedToDoList from './components/CompletedToDoList';
// Importing custom components for navigation and displaying different parts of the app.

import './App.css';
// Importing the CSS file for styling the app.

const App = () => {
    // Defining State 
    const [todos, setTodos] = useState([]);
    // State for storing the list of to-do items.
    const [completedTasks, setCompletedTasks] = useState([]);
    // State for storing the list of completed to-do items.

    useEffect(() => {
        // useEffect for fetching the initial list of to-dos from the server when the component mounts.
        fetch('http://localhost:3000/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);

    const addToDo = (newToDo) => {
        // Function to add a new to-do to the list.
        setTodos([...todos, newToDo]);
    };

    // This function deletes a to-do by its id. After a successful DELETE request to the server,
    // it updates the todos state by filtering out the to-do with the matching id.
    const deleteToDo = (id) => {
        console.log(`Attempting to delete todo with id: ${id}`); // Log the id in App
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
            console.log(`Todo with id: ${id} deleted successfully`);
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
          })
          .catch(error => console.error('Error deleting todo:', error));
      };
    

    // This function marks a to-do item as completed.
    // It finds the to-do item by its id, adds it to the completedTasks state,
    // and removes it from the todos state.
    const markComplete = (todoId) => {
        // Find the to-do item with the matching id
        const todo = todos.find(t => t.id === todoId);
    
        // Add the completed to-do to the completedTasks state
        setCompletedTasks([...completedTasks, todo]);
    
        // Update the todos state by filtering out the completed to-do
        setTodos(todos.filter(todo => todo.id !== todoId));
    };

    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<ToDoList todos={todos} onComplete={markComplete} deleteToDo={deleteToDo} />} />
                    <Route path="/create" element={<CreateToDo onAdd={addToDo} />} />
                    <Route path="/delete/:id" element={<DeleteToDo deleteToDo={deleteToDo} />} />
                    <Route path="/completed" element={<CompletedToDoList todos={todos} completedTasks={completedTasks} />} />
                </Routes>
            </div>  
        </Router>
    );
};

export default App;
