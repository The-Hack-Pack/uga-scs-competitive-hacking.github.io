import React from 'react';

const DIFFICULTY_STYLES = {
  Easy:   { backgroundColor: "#2ea432ff", color: "white" },
  Medium: { backgroundColor: "#b47112ff", color: "white" },
  Hard:   { backgroundColor: "#d52f23ff", color: "white" }
};

export default function DifficultyLabel({ level }) {
  const style = {
    ...DIFFICULTY_STYLES[level],
    padding: "5px 8px",
    borderRadius: "4px",
    fontSize: "0.8em",
    marginLeft: "5px"
  };
  return <span style={style}>{level}</span>;
}