import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteToDo = ({ deleteToDo }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Perform deletion logic when component mounts
    const handleDelete = () => {
      deleteToDo(id); // Invoke deleteToDo function with the ID parameter
      navigate('/'); // Navigate back to the main page or desired route after deletion
    };

    // Example of handling deletion
    handleDelete();
  }, [id, deleteToDo, navigate]);

  return (
    <div>
      <h2>Deleting To-Do...</h2>
    </div>
  );
};

export default DeleteToDo;
