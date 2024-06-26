import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/create" className="nav-link">Create ToDo</Link>
      <Link to="/completed" className="nav-link">Completed To-Dos</Link>
    </div>
  );
};

export default NavBar;
