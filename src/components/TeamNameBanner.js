import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const TeamNameBanner = () => {
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    const name = Cookies.get('teamName');
    if (!name) {
      const newName = prompt('Enter your team name (make sure spelling is correct):');
      if (newName) {
        Cookies.set('teamName', newName, { expires: 7 });
        setTeamName(newName);
      }
    } else {
      setTeamName(name);
    }
  }, []);

  const updateTeamName = () => {
    const newName = prompt('Enter your team name (make sure spelling is correct):');
    if (newName) {
      Cookies.set('teamName', newName, { expires: 7 });
      setTeamName(newName);
    }
  };

  return (
    <div style={{
      backgroundColor: '#003366',
      color: 'white',
      padding: '10px',
      borderRadius: '8px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <span><strong>Team:</strong> {teamName || 'Not set'}</span>
      <button onClick={updateTeamName} style={{
        backgroundColor: 'white',
        color: '#003366',
        border: 'none',
        padding: '6px 12px',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Change Team Name
      </button>
    </div>
  );
};

export default TeamNameBanner;
