// src/components/PasswordForm.js

import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const PasswordForm = ({ hash, algorithm }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [result, setResult] = useState('');

  const hashPassword = (password, algorithm) => {
    switch (algorithm) {
      case 'sha1':
        return CryptoJS.SHA1(password).toString();
      // Add more cases here for other algorithms if needed
      default:
        return password; // Default to plaintext if no valid algorithm is specified
    }
  };

  const checkPassword = () => {
    const inputHash = hashPassword(inputPassword, algorithm);
    if (inputHash === hash) {
      setResult('Correct!');
    } else {
      setResult('Incorrect. Try again.');
    }
  };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); checkPassword(); }}>
        <input
          type="text"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Enter answer"
        />
        <button type="submit">Check</button>
      </form>
      <p>{result}</p>
    </div>
  );
};

export default PasswordForm;
