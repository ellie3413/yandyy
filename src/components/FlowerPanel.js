// FlowerPanel.js
import React from 'react';
import './FlowerPanel.css';

//여기에 꽃 추가
const flowerList = [
  { name: 'tulip', label: '튤립' },
  { name: 'gevera', label: '거베라' },
];

function FlowerPanel({ onSelect }) {
  return (
    <div className="flower-panel">
      <h3 className="flower-title">
        <img src="/assets/logo.png" alt="logo" className="flower-icon" />
        꽃 선택
        <img src="/assets/logo.png" alt="logo" className="flower-icon" />
      </h3>
      <div className="flower-grid">
        {flowerList.map((flower) => (
          <div
            key={flower.name}
            className="flower-item"
            onClick={() => onSelect(flower.name)}
          >
            <div className="image-wrapper">
              <img
                src={`/assets/${flower.name}.png`}
                alt={flower.label}
                className="flower-img"
              />
              <div className="hover-overlay">+</div>
            </div>
            <div className="flower-label">{flower.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlowerPanel; 
