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
      case 'sha512':
        return CryptoJS.SHA512(password).toString();
      // Add more cases here for other algorithms if needed
      default:
        return password; // Default to plaintext if no valid algorithm is specified
    }
  };

  const checkPassword = () => {
    const inputHash = hashPassword(inputPassword, algorithm);
    if (inputHash === hash) {
      setResult('✅ Correct!');
    } else {
      setResult('❌ Incorrect. Try again.');
    }
  };

  return (
    <div style={{ maxWidth: '350px', padding: '12px 0', textAlign: 'left' }}>
      <form onSubmit={(e) => { e.preventDefault(); checkPassword(); }}>
        <label htmlFor="password-input" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Submission</label><br />
        <input
          id="password-input"
          type="text"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Enter answer"
          style={{
            padding: '6px',
            border: result === 'Correct!' ? '2px solid green' : result === 'Incorrect. Try again.' ? '2px solid red' : '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1rem',
            marginTop: '4px',
            marginBottom: '8px',
            width: '70%'
          }}
        />
        <button
          type="submit"
          className="pf5-check-btn"
          style={{
            padding: '6px 16px',
            borderRadius: '4px',
            border: '1px solid black',
            background: 'transparent',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            marginLeft: '8px'
          }}
        >
          Check
        </button>
        <style>{`
          [data-theme='dark'] .pf5-check-btn {
            border: 1px solid white !important;
          }
        `}</style>
      </form>
      <p style={{ marginTop: '6px', fontSize: '0.85rem', opacity: 0.85 }}>
        Note: Answer is case-sensitive.
      </p>
      <p style={{ marginTop: '10px', fontWeight: 'bold', color: result === 'Correct!' ? 'green' : undefined }}>{result}</p>
    </div>
  );
};

export default PasswordForm;
