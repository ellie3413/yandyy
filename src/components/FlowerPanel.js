import React from 'react';

const flowerList = ['tulip', 'gevera'];

function FlowerPanel({ onSelect }) {
  return (
    <div className="flower-panel" style={panelStyle}>
      <h3 style={titleStyle}>
        <img src="/assets/logo.png" alt="logo" style={iconStyle} />
        꽃 선택
        <img src="/assets/logo.png" alt="logo" style={iconStyle} />
      </h3>
      <div style={listStyle}>
        {flowerList.map((name) => (
          <img
            key={name}
            src={`/assets/${name}.png`}
            alt={name}
            onClick={() => onSelect(name)}
            style={flowerStyle}
          />
        ))}
      </div>
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
};

const iconStyle = {
  width: '24px',
  height: '24px',
};

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: '10px',
};

const flowerStyle = {
  width: 60,
  margin: 10,
  cursor: 'pointer',
};

export default FlowerPanel;
