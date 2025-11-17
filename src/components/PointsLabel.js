import React from 'react';

export default function PointsLabel({ points }) {
  const style = {
    backgroundColor: '#1976D2',
    color: 'white',
    padding: '5px 8px',
    borderRadius: '4px',
    fontSize: '0.8em',
    marginLeft: '5px',
    marginRight: '5px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
  };
  return <span style={style}>{points} pts</span>;
}
