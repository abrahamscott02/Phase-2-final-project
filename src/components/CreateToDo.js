import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 

const CreateToDo = ({ onAdd }) => { 
  const [todo, setToDo] = useState({ title: '', description: '' });
  const navigate = useNavigate(); // Hook for navigation


  const handleChange = (e) => {
    // Destructure name and value from the input field that triggered the event.
    const { name, value } = e.target;
    // Update the todo state with the new value for the corresponding field (title or description)
    setToDo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    };
    
    fetch('http://localhost:3000/todos', configObj)
      .then(res => res.json())
      .then(data => {
        onAdd(data); // Add the new to-do to the list 
        navigate('/')
      });
  };

  return (
    <div>
      <h2>Create To-Do</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
          type="text" 
          name="title" 
          value={todo.title} 
          onChange={handleChange} 
          required 
          />
        </label>
        <label>
          Description:
          <input 
          type="text" 
          name="description" 
          value={todo.description} 
          onChange={handleChange} 
          required 
          />
        </label>
        <button id='createBtn' type="submit">Add To-Do</button>
      </form>
    </div>
  );
};

export default CreateToDo;
