import React, { useState } from 'react';

const CreateToDo = ({ onAdd }) => {
  const [todo, setToDo] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
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
      .then(data => onAdd(data));
  };

  return (
    <div>
      <h2>Create To-Do</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={todo.title} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={todo.description} onChange={handleChange} required />
        </label>
        <button type="submit">Add To-Do</button>
      </form>
    </div>
  );
};

export default CreateToDo;
