import React, { useState } from 'react';
import './FlowerPanel.css';

const flowerList = [
  { name: 'tulip', label: '튤립', link: 'https://namu.wiki/w/튤립' },
  { name: 'gevera', label: '거베라', link: 'https://namu.wiki/w/거베라' },
  { name: 'rose', label: '장미', link: 'https://namu.wiki/w/장미' },
  { name: 'sunflower', label: '해바라기', link: 'https://namu.wiki/w/해바라기' },
  { name: 'suguk', label: '수국', link: 'https://namu.wiki/w/수국' },
  { name: 'daisy', label: '데이지', link: 'https://namu.wiki/w/데이지' },
  { name: 'carne', label: '카네이션', link: 'https://namu.wiki/w/카네이션' },
  { name: 'leaf', label: '잎 추가', link: 'https://namu.wiki/w/잎' },
];

function FlowerPanel({ onSelect }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flower-panel">
      <div className="flower-grid">
        {flowerList.map((flower) => (
          <div
            key={flower.name}
            className="flower-item"
            onClick={() => onSelect(flower.name)}
            onMouseEnter={() => setHovered(flower.name)}
            onMouseLeave={() => setHovered(null)}
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
            {hovered === flower.name && (
              <a
                href={flower.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flower-link"
                onClick={(e) => e.stopPropagation()} // 🌟 이벤트 전파 방지
              >
                자세히 보기 →
              </a>

            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlowerPanel;
