import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const PasswordForm4 = ({ hash, algorithm, challengeName, points }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [result, setResult] = useState('');
  const [teamName, setName] = useState('');

  useEffect(() => {
    const existingTeam = Cookies.get('name');
    if (existingTeam) {
      setName(existingTeam);
    }
  }, []);


  const hashPassword = (password, algorithm) => {
    const lower = password.toLowerCase();
    switch (algorithm) {
      case 'sha1': return CryptoJS.SHA1(lower).toString();
      case 'sha512': return CryptoJS.SHA512(lower).toString();
      default: return lower;
    }
  };

  const checkPassword = async () => {
    const inputHash = hashPassword(inputPassword, algorithm);
    if (inputHash === hash) {
      setResult('✅ Correct!');
      await submitResult(inputPassword);
    } else {
      setResult('❌ Incorrect. Try again.');
    }
  };

  const submitResult = async (answer) => {
    const currentTeamName = Cookies.get('name');
    if (!currentTeamName) return;

    const payload = {
    teamName: currentTeamName,
    challengeName,
    points
    };


    try {
      await fetch('https://script.google.com/macros/s/AKfycbwU9t9UoFtQpo68E2afArMgDp-6ADEZN7z2d6AToRGyFXPN5InQ-3Hmk5ugWyz0yAb8/exec', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
        mode: "no-cors",
      });
    } catch (err) {
      console.error('Submission failed:', err);
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

export default PasswordForm4;
