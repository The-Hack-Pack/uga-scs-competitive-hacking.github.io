import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Login = () => {
  // Get stored name and email from cookies, if available
  const storedName = Cookies.get('name') || '';
  const storedEmail = Cookies.get('email') || '';

  const [name, setName] = useState(storedName);
  const [email, setEmail] = useState(storedEmail);

  useEffect(() => {
    // Update cookie values if name or email changes
    if (name) Cookies.set('name', name, { expires: 365 });
    if (email) Cookies.set('email', email, { expires: 365 });
  }, [name, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Cookies will be set automatically via useEffect
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
