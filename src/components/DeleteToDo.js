import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteToDo = ({ onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const configObj = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(`http://localhost:3000/todos/${id}`, configObj)
      .then(res => res.json())
      .then(() => {
        onDelete(id);
        navigate('/');
      });
  }, [id, onDelete, navigate]);

  return (
    <div>
      <h2>Deleting To-Do...</h2>
    </div>
  );
};

export default DeleteToDo;
