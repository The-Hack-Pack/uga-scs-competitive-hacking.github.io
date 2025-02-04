import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const PasswordForm2 = ({ hash, algorithm }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [result, setResult] = useState('');

  const hashPassword = (password, algorithm) => {
    // Convert password to lowercase before hashing
    const lowercasedPassword = password.toLowerCase();

    switch (algorithm) {
      case 'sha1':
        return CryptoJS.SHA1(lowercasedPassword).toString();
      case 'sha512':
        return CryptoJS.SHA512(lowercasedPassword).toString();
      // Add more cases here for other algorithms if needed
      default:
        return lowercasedPassword; // Default to lowercase password if no valid algorithm is specified
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

export default PasswordForm2;
