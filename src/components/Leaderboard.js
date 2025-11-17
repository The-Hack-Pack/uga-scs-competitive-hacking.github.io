import React, { useEffect, useState } from 'react';

// Use the published CSV URL for Sheet2
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

const Leaderboard = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [expanded]);

  useEffect(() => {
    let isMounted = true;
    const fetchLeaderboard = () => {
      fetch(SHEET_CSV_URL + `&cb=${Date.now()}`)
        .then(res => res.text())
        .then(csv => {
          if (!isMounted) return;
          const parsed = parseCSV(csv);
          // Sort by Total Points descending
          parsed.sort((a, b) => parseInt(b['Total Points']) - parseInt(a['Total Points']));
          setEntries(parsed);
          setLoading(false);
        })
        .catch(err => {
          if (!isMounted) return;
          setError('Failed to load leaderboard');
          setLoading(false);
        });
    };
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 30000); // 30 seconds
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (loading) return <div>Loading leaderboard...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      className="leaderboard-container"
      style={{
        maxWidth: expanded ? '100vw' : '600px',
        width: expanded ? '100vw' : 'auto',
        margin: expanded ? '0' : '32px auto',
        padding: expanded ? '32px' : '16px',
        border: '1px solid #ccc',
        borderRadius: expanded ? '0' : '12px',
        background: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: expanded ? 'fixed' : 'relative',
        top: expanded ? 0 : 'auto',
        left: expanded ? 0 : 'auto',
        height: expanded ? '100vh' : 'auto',
        zIndex: expanded ? 9999 : 'auto',
        overflow: expanded ? 'auto' : 'visible',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '8px', color: '#1565c0', width: '100%' }}>Leaderboard</h2>
      <div style={{ textAlign: 'center', marginBottom: '16px', color: '#888', fontSize: '0.95rem' }}>
        (Leaderboard auto-updates every 30 seconds)
      </div>
      <button
        onClick={() => setExpanded(e => !e)}
        style={{
          marginBottom: '16px',
          padding: '6px 18px',
          borderRadius: '6px',
          border: '1px solid #1565c0',
          background: expanded ? '#1565c0' : 'transparent',
          color: expanded ? '#fff' : '#1565c0',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: 'pointer',
          alignSelf: 'center',
          zIndex: expanded ? 10 : 'auto'
        }}
        aria-label={expanded ? 'Collapse leaderboard' : 'Expand leaderboard'}
      >
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      <div style={{ width: '100%', maxHeight: expanded ? '70vh' : 'none', overflowY: expanded ? 'auto' : 'visible' }}>
        <table className="leaderboard-table" style={{ width: 'fit-content', margin: '0 auto', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Rank</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Total Points</th>
            <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Latest Submission</th>
          </tr>
        </thead>
        <tbody>
          {(expanded ? entries : entries.slice(0, 10)).map((entry, idx) => (
            <tr key={entry['Name'] + idx}>
              <td style={{ padding: '8px', textAlign: 'center' }}>{idx + 1}</td>
              <td style={{ padding: '8px' }}>{entry['Name']}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{entry['Total Points']}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>{entry['Latest Submission']}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
      <style>{`
        [data-theme='dark'] .leaderboard-container {
          background: #222 !important;
          border-color: #444 !important;
        }
        [data-theme='dark'] .leaderboard-table {
          background: #222 !important;
          color: #eee !important;
        }
        [data-theme='dark'] .leaderboard-table th {
          background: #333 !important;
          color: #90caf9 !important;
          border-bottom: 1px solid #555 !important;
        }
        [data-theme='dark'] .leaderboard-table td {
          background: #222 !important;
          color: #eee !important;
          border-bottom: 1px solid #444 !important;
        }
        [data-theme='dark'] .leaderboard-container h2 {
          color: #90caf9 !important;
        }
        .leaderboard-container[style*='position: fixed'] {
          box-shadow: 0 0 0 100vw rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
};

export default Leaderboard;
