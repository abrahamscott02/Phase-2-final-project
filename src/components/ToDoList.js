import React from 'react';
import ToDoCard from './ToDoCard';

const ToDoList = ({ todos, onComplete, deleteToDo }) => {
  const handleComplete = (id) => {
    onComplete(id); // Logic to handle completion
  };

  const handleDelete = (id) => {
    console.log(`Deleting todo with id: ${id}`); // Add logging here
    deleteToDo(id); // Logic to handle deletion
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {todos.map(todo => (
          <ToDoCard
            key={todo.id} 
            todo={todo} 
            onComplete={handleComplete} 
            onDelete={handleDelete} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
