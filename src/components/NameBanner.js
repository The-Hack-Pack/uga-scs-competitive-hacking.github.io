import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSL8vcO7vC60SNXge57rI85V-pSbDcZBqM3DpAKt98_0kSRYMa--l4ftJmwdsaYGmWMsqea50_DJtrx/pub?gid=428313105&single=true&output=csv';

function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    const entry = {};
    headers.forEach((h, i) => {
      entry[h.trim()] = values[i]?.trim();
    });
    return entry;
  });
}

function normalizeName(name) {
  return name.toLowerCase().replace(/\s+/g, '');
}

const NameBanner = () => {
  const [name, setName] = useState('');
  const [points, setPoints] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    if (!name) return;
    let isMounted = true;
    const fetchPoints = () => {
      setLoading(true);
      fetch(SHEET_CSV_URL + `&cb=${Date.now()}`)
        .then(res => res.text())
        .then(csv => {
          if (!isMounted) return;
          const parsed = parseCSV(csv);
          // Find entry by normalized name
          const userEntry = parsed.find(entry => normalizeName(entry['Name'] || '') === normalizeName(name));
          setPoints(userEntry ? userEntry['Total Points'] : null);
          setLoading(false);
        })
        .catch(() => {
          if (!isMounted) return;
          setPoints(null);
          setLoading(false);
        });
    };
    fetchPoints();
    const interval = setInterval(fetchPoints, 30000); // 30 seconds
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [name]);

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
      <span>
        <strong>Name:</strong> {name || 'Not set'}
        {name && (
          <span style={{ marginLeft: '18px', fontWeight: 'normal', fontSize: '1rem' }}>
            <strong>Total Points:</strong> {loading ? '...' : (points !== null ? points : 'N/A')}
          </span>
        )}
      </span>
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
