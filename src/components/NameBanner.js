import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const NameBanner = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const savedName = Cookies.get('name');
    if (!savedName) {
      const newName = prompt('Enter your full name:');
      if (newName) {
        Cookies.set('name', newName, { expires: 7 });
        setName(newName);
      }
    } else {
      setName(savedName);
    }
  }, []);

  const updateName = () => {
    const newName = prompt('Enter your full name:');
    if (newName) {
      Cookies.set('name', newName, { expires: 7 });
      setName(newName);
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
      <span><strong>Name:</strong> {name || 'Not set'}</span>
      <button onClick={updateName} style={{
        backgroundColor: 'white',
        color: '#003366',
        border: 'none',
        padding: '6px 12px',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Change Name
      </button>
    </div>
  );
};

export default NameBanner;
