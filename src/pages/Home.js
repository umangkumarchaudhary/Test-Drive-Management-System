import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Mercedes-Benz Test Drive Management</h1>
      <p>Please schedule your test drive by clicking the button below:</p>
      <Link to="/schedule">
        <button>Schedule Test Drive</button>
      </Link>
    </div>
  );
};

export default Home;
