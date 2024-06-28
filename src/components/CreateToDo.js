// Importing useState for managing state
import React, { useState } from 'react';
// Import the useNavigation hook for navigation
import { useNavigate } from "react-router-dom"; 

const CreateToDo = ({ onAdd }) => {
  // State to manage the new to-do inputs (title and description)  
  const [todo, setToDo] = useState({ title: '', description: '' });
  const navigate = useNavigate(); // Hook for navigation


  const handleChange = (e) => {
    // Destructure name and value from the input field that triggered the event.
    const { name, value } = e.target;
    // Update the todo state with the new value for the corresponding field (title or description)
    setToDo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the the default form submission behavior
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo), // Convert the todo object to a JSON string
    };
    // Send a POST request to add the new to-do
    fetch('http://localhost:3000/todos', configObj)
      .then(res => res.json())
      .then(data => {
        onAdd(data); // Add the new to-do to the list 
        navigate('/') // Navigate back to the home page
      });
  };

  return (
    <div>
      <h2>Create To-Do</h2>
      <form onSubmit={handleSubmit}> {/* Form submission handled by handleSubmit */}
        <label>
          Title:
          {/* Input for the title of the to-do, onChange handled by handleChange */}
          <input type="text" name="title" value={todo.title} onChange={handleChange} required />
        </label>
        <label>
          Description:
          {/* Input for the description of the to-do, onChange handled by handleChange */}
          <input type="text" name="description" value={todo.description} onChange={handleChange} required />
        </label>
        {/* Submit button to add the to-do */}
        <button type="submit">Add To-Do</button>
      </form>
    </div>
  );
};

export default CreateToDo;
