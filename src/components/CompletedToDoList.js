import React from 'react';

const CompletedToDoList = ({ todos, completedTasks }) => {
  // const completedTodos = todos.filter(todo => completedTasks.includes(todo.id));

  console.log("CompletedTodos:", completedTasks);
  console.log("todos:", todos);

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
    </div>
  );
};

export default CompletedToDoList;
