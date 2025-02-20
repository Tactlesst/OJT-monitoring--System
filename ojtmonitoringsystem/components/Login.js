import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // If using react-router-dom

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    try {
      const response = await fetch('/api/login', {  // ***REPLACE WITH YOUR ACTUAL API URL***
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) { // Check for HTTP errors (e.g., 400, 500)
        const errorData = await response.json(); // Try to get error details from the server
        throw new Error(errorData.message || `HTTP error ${response.status}`); // Throw an error to be caught
      }

      const data = await response.json(); // Parse JSON response

      localStorage.setItem('token', data.token);
      navigate('/dashboard'); // Or navigate('/path/to/your/dashboard');
    } catch (err) {
      setError(err.message); // Display error message
      console.error("Login error:", err); // Log the error to the console for debugging
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Username/Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;