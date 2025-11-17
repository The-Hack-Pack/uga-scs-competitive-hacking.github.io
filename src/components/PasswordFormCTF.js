import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const PasswordForm5 = ({ hash, algorithm, challengeName, points }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [result, setResult] = useState('');
  const [teamName, setName] = useState('');
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [alreadySolved, setAlreadySolved] = useState(false);

  useEffect(() => {
    const existingTeam = Cookies.get('name');
    if (existingTeam) {
      setName(existingTeam);
    }
    // Check localStorage for solved status
    const solvedKey = `pf5-solved-${challengeName}`;
    if (localStorage.getItem(solvedKey) === 'true') {
      setAlreadySolved(true);
      setIsCorrect(true);
      setResult('✅ Already solved!');
    }
  }, [challengeName]);


  const hashPassword = (password, algorithm) => {
    const lower = password.toLowerCase();
    switch (algorithm) {
      case 'sha1': return CryptoJS.SHA1(lower).toString();
      case 'sha512': return CryptoJS.SHA512(lower).toString();
      default: return lower;
    }
  };

  const checkPassword = async () => {
    if (alreadySolved) return;
    const strippedPassword = inputPassword.replace(/\s+/g, '');
    const inputHash = hashPassword(strippedPassword, algorithm);
    if (inputHash === hash) {
      setResult('✅ Correct! +' + points + ' points.');
      setIsIncorrect(false);
      setIsCorrect(true);
      setAlreadySolved(true);
      // Mark as solved in localStorage
      const solvedKey = `pf5-solved-${challengeName}`;
      localStorage.setItem(solvedKey, 'true');
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
            disabled={alreadySolved}
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
              cursor: alreadySolved ? 'not-allowed' : 'pointer',
              marginLeft: '8px',
              opacity: alreadySolved ? 0.6 : 1
            }}
            disabled={alreadySolved}
          >
            {alreadySolved ? 'Solved' : 'Check'}
          </button>
          <style>{`
            [data-theme='dark'] .pf5-check-btn {
              border: 1px solid white !important;
            }
          `}</style>
        </form>
        <p style={{ marginTop: '10px', fontWeight: 'bold', color: alreadySolved ? 'green' : undefined }}>{result}</p>
      </div>
  );
};

export default PasswordForm5;
