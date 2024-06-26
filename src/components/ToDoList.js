import React from 'react';

const ToDoList = ({ todos, onComplete }) => {
    return (
        <div>
            <h2>To-Do List</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>Title:</strong> {todo.title} <br />
                        <strong>Description:</strong> {todo.description} <br />
                        <input
                            type="checkbox"
                            onChange={() => onComplete(todo.id)}
                            checked={false} // Adjust as needed
                        /> Mark Complete
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
