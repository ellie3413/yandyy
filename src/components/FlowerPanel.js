import React from 'react';

const flowerList = ['tulip', 'gevera'];

function FlowerPanel({ onSelect }) {
  return (
    <div className="flower-panel" style={panelStyle}>
      <h3 style={titleStyle}>🌸 꽃 선택 🌸</h3>
      {flowerList.map((name) => (
        <img
          key={name}
          src={`/assets/${name}.png`}
          alt={name}
          onClick={() => onSelect(name)}
          style={{ width: 60, margin: 10, cursor: 'pointer' }}
        />
      ))}
    </div>
  );
}

const panelStyle = {
  padding: '10px',
};

const titleStyle = {
  textAlign: 'center',
  fontFamily: 'IBM Plex Sans KR, sans-serif',
  fontSize: '1.5rem',
};

export default FlowerPanel;
