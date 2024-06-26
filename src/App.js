import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
import CreateToDo from './components/CreateToDo';
import DeleteToDo from './components/DeleteToDo';
import CompletedToDoList from './components/CompletedToDoList';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);

    const addToDo = (newToDo) => {
        setTodos([...todos, newToDo]);
    };

    const deleteToDo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    };

    const toggleComplete = (todoId) => {
        const todo = todos.find(t => t.id === todoId);
        if (completedTasks.includes(todoId)) {
            setCompletedTasks(completedTasks.filter(id => id !== todoId));
            setTodos([...todos, todo]);
        } else {
            setCompletedTasks([...completedTasks, todoId]);
            setTodos(todos.filter(todo => todo.id !== todoId));
        }
    };

    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<ToDoList todos={todos} onComplete={toggleComplete} />} />
                    <Route path="/create" element={<CreateToDo onAdd={addToDo} />} />
                    <Route path="/delete/:id" element={<DeleteToDo onDelete={deleteToDo} />} />
                    <Route path="/completed" element={<CompletedToDoList todos={todos} completedTasks={completedTasks} />} />
                </Routes>
            </div>  
        </Router>
    );
};

export default App;
