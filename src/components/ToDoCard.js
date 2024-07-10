import React from 'react';

const CardToDo = ({ todo, onComplete, onDelete }) => {
  return (
    <li>
      <strong>Title:</strong> {todo.title} <br />
      <strong>Description:</strong> {todo.description}
      <button id='completeBtn' onClick={() => onComplete(todo.id)}>Complete</button>
      <button id='deleteBtn' onClick={() => onDelete(todo.id)}>Delete</button>
      <hr />
    </li>
  );
};

export default CardToDo;
