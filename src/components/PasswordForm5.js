import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const PasswordForm5 = ({ hash, algorithm, challengeName, points }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [result, setResult] = useState('');
  const [teamName, setName] = useState('');
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

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
    const strippedPassword = inputPassword.replace(/\s+/g, '');
    const inputHash = hashPassword(strippedPassword, algorithm);
    if (inputHash === hash) {
      setResult('✅ Correct! +' + points + ' points.');
      setIsIncorrect(false);
      setIsCorrect(true);
      await submitResult(inputPassword);
    } else {
      setResult('❌ Incorrect. Try again.');
      setIsIncorrect(true);
      setIsCorrect(false);
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
      <div style={{ maxWidth: '350px', padding: '12px 0', textAlign: 'left' }}>
        <form onSubmit={(e) => { e.preventDefault(); checkPassword(); }}>
          <label htmlFor="password-input" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Submission</label><br />
          <input
            id="password-input"
            type="text"
            value={inputPassword}
            onChange={(e) => {
              setInputPassword(e.target.value);
              if (isIncorrect) setIsIncorrect(false);
              if (isCorrect) setIsCorrect(false);
            }}
            placeholder="Enter answer"
            style={{
              padding: '6px',
              border: isCorrect
                ? '2px solid green'
                : isIncorrect
                  ? '2px solid red'
                  : '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '1rem',
              marginTop: '4px',
              marginBottom: '8px',
              width: '70%'
            }}
          />
          <button type="submit" style={{ padding: '6px 16px', borderRadius: '4px', border: '1px solid #ccc', background: 'transparent', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginLeft: '8px' }}>
            Check
          </button>
        </form>
        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{result}</p>
      </div>
  );
};

export default PasswordForm5;
