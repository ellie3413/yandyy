import React, { useState } from 'react';

function FlowerItem({ flower, index, onMouseDown, onUpdateSize, onRemove }) {
  const [hovered, setHovered] = useState(false);
  const size = flower.size || 100;

  return (
    <div
      style={{
        position: 'absolute',
        left: flower.x,
        top: flower.y,
        zIndex: 10 + index,
        textAlign: 'center',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={`/assets/${flower.name}.png`}
        alt={flower.name}
        onMouseDown={(e) => onMouseDown(e, index)}
        style={{
          width: `${size}px`,
          cursor: 'grab',
          userSelect: 'none',
          display: 'block',
          margin: '0 auto',
        }}
      />
      
      {hovered && (
        <div style={buttonContainerStyle}>
          <button onClick={() => onUpdateSize(index, +10)} style={resizeBtn}>＋</button>
          <button onClick={() => onUpdateSize(index, -10)} style={resizeBtn}>－</button>
          <button onClick={() => onRemove(index)} style={deleteBtn}>❌</button>
        </div>
      )}
    </div>
  );
}

const buttonContainerStyle = {
  marginTop: '4px',
  display: 'flex',
  justifyContent: 'center',
  gap: '4px',
};

const resizeBtn = {
  padding: '2px 6px',
  fontSize: '12px',
  cursor: 'pointer',
  backgroundColor: '#fff0e6',
  border: '1px solid #ffb997',
  borderRadius: '4px',
};

const deleteBtn = {
  ...resizeBtn,
  color: '#fff',
  backgroundColor: '#ff6b6b',
  borderColor: '#ff6b6b',
};

export default FlowerItem;
