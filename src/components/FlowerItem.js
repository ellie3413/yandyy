import React, { useState } from 'react';

function FlowerItem({ flower, index, onMouseDown, onRemove, onMoveForward, onMoveBackward }) {
  const [hovered, setHovered] = useState(false);
  const size = flower.size || 100;
  const rotation = flower.rotation || 0;

  return (
    <div
      style={{
        position: 'absolute',
        left: flower.x,
        top: flower.y,
        zIndex: 10 + index,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 꽃 이미지 */}
      <img
        src={`/assets/${flower.name}.png`}
        alt={flower.name}
        onMouseDown={(e) => onMouseDown(e, index)}
        style={{
          width: `${size}px`,
          transform: `rotate(${rotation}deg)`,
          cursor: 'grab',
          userSelect: 'none',
          display: 'block',
        }}
      />

      {/* 버튼 오버레이 */}
      {hovered && (
        <div style={overlayButtonContainer}>
          <button onClick={() => onMoveForward(index)} style={ctrlBtn}>앞으로</button>
          <button onClick={() => onMoveBackward(index)} style={ctrlBtn}>뒤로</button>
          <button onClick={() => onRemove(index)} style={deleteBtn}>❌</button>
        </div>
      )}
    </div>
  );
}

const overlayButtonContainer = {
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  gap: '4px',
  backgroundColor: '#fffaf0cc',
  borderRadius: '8px',
  padding: '2px',
  zIndex: 999,
};

const ctrlBtn = {
  padding: '4px 6px',
  fontSize: '12px',
  cursor: 'pointer',
  backgroundColor: '#fff0e6',
  border: '1px solid #ffb997',
  borderRadius: '4px',
};

const deleteBtn = {
  ...ctrlBtn,
  backgroundColor: '#ff6b6b',
  borderColor: '#ff6b6b',
  color: 'white',
};

export default FlowerItem;
