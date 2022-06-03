import React from 'react';
import { Link } from 'react-router-dom';

export function Welcome() {
  return (
    <div>
      <h2>Welcome to CTD Twitter</h2>
      <p>Signup/Login using the link in the top right.</p>
      <ul>
        Or find out more about us:
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
}
