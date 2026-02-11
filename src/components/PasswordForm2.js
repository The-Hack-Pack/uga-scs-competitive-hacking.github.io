import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const PasswordForm2 = ({ hash, algorithm, challengeName }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [result, setResult] = useState('');
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [alreadySolved, setAlreadySolved] = useState(false);

  const solvedKey = `regular-solved-${challengeName}`;

  useEffect(() => {
      if (localStorage.getItem(solvedKey) === 'true') {
        setAlreadySolved(true);
        setIsCorrect(true);
        setResult('✅ Already solved!');
      }
    }, [challengeName]);

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
    if (alreadySolved) return;
    const inputHash = hashPassword(inputPassword, algorithm);
    if (inputHash === hash) {
      setResult('✅ Correct!');
      setIsIncorrect(false);
      setIsCorrect(true);
      setAlreadySolved(true);
      // Mark as solved in localStorage
      localStorage.setItem(solvedKey, 'true');
    } else {
      setResult('❌ Incorrect. Try again.');
      setIsIncorrect(true);
      setIsCorrect(false);
    }
  };

  const resetAnswer = () => {
      localStorage.removeItem(solvedKey);
      Cookies.remove(solvedKey);
  
      setInputPassword('');
      setResult('');
      setIsIncorrect(false);
      setIsCorrect(false);
      setAlreadySolved(false);
    };

  return (
    <div style={{ maxWidth: '350px', padding: '12px 0', textAlign: 'left' }}>
      <form onSubmit={(e) => { e.preventDefault(); checkPassword(); }}>
        <label htmlFor="password-input" style={{ fontWeight: 'bold', fontSize: '1rem' }}>Submission</label><br />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', marginBottom: '8px' }}>
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
              flex: 1,
              minWidth: 0
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
              opacity: alreadySolved ? 0.6 : 1,
              flexShrink: 0
            }}
            disabled={alreadySolved}
          >
            {alreadySolved ? 'Solved' : 'Check'}
          </button>
          <button
            type="button"
            className="pf5-reset-btn"
            onClick={resetAnswer}
            aria-label="Reset"
            title="Reset"
            style={{
              padding: '6px 10px',
              borderRadius: '4px',
              border: '1px solid #b00020',
              background: 'transparent',
              color: '#b00020',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: (alreadySolved || isCorrect) ? 'pointer' : 'not-allowed',
              opacity: (alreadySolved || isCorrect) ? 1 : 0.45,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
            disabled={!(alreadySolved || isCorrect)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              style={{ display: 'block' }}
            >
              <path
                d="M12 5a7 7 0 1 1-6.32 4H3l3.5-3.5L10 9H7.94A5 5 0 1 0 12 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <style>{`
          [data-theme='dark'] .pf5-check-btn {
            border: 1px solid white !important;
          }

          [data-theme='dark'] .pf5-reset-btn {
            border: 1px solid #ff4d6d !important;
            color: #ff4d6d !important;
          }
        `}</style>
      </form>
      <p style={{ marginTop: '10px', fontWeight: 'bold'}}>{result}</p>
    </div>
  );
};

export default PasswordForm2;
