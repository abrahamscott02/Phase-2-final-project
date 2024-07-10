import React from 'react';

const CompletedToDoList = ({ completedTasks, clearCompleted }) => {

  return (
    <div>
      <h2>Completed To-Do List</h2>
      <ul>
        {completedTasks.map(todo => (
          <li key={todo.id}>
            <strong>Title:</strong> {todo.title} <br />
            <strong>Description:</strong> {todo.description}
            <hr />
          </li>
        ))}
      </ul>
      {completedTasks.length > 0 ? (
    <button id='clearAllBtn' onClick={clearCompleted}>Clear All Completed To-Dos</button>
) : ''}
    </div>
  );
};

export default CompletedToDoList;
