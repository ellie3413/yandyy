import React from 'react';

const flowerList = ['tulip', 'daisy', 'ranunculus', 'daffodil'];

function FlowerPanel({ onSelect }) {
  return (
    <div className="flower-panel">
      <h3>🌸 꽃 선택</h3>
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

export default FlowerPanel;
