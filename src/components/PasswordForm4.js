import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const PasswordForm4 = ({ hash, algorithm, challengeName, points }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [result, setResult] = useState('');
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    const existingTeam = Cookies.get('teamName');
    if (existingTeam) {
      setTeamName(existingTeam);
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
    const currentTeamName = Cookies.get('teamName');
    if (!currentTeamName) return;

    const payload = {
    teamName: currentTeamName,
    challengeName,
    points
    };


    try {
      await fetch('https://script.google.com/macros/s/AKfycbwaUetsTeGAc22aChQV6l2rQAVPJN6za8jkIRPeWeIlOO0jnFltqLoN_CojmSZHBoqb/exec', {
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
