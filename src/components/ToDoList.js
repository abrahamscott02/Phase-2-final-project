import React from 'react';

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
        {todos.map((todo, index) => (
          <li key={`${todo.id}-${index}`}>
            <strong>Title:</strong> {todo.title} <br />
            <strong>Description:</strong> {todo.description}
            {!todo.completed ? (
              <>
                <button onClick={() => handleComplete(todo.id)}>Complete</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </>
            ) : (
              <span>Completed</span>
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
