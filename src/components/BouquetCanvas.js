import React, { useRef } from 'react';

function BouquetCanvas({ bouquet, onClear, onUndo, onUpdatePosition }) {
  const selectedIndexRef = useRef(null);
  const offsetRef = useRef({ dx: 0, dy: 0 });

  const handleMouseDown = (e, idx) => {
    const flower = bouquet[idx];

    selectedIndexRef.current = idx;
    offsetRef.current = {
      dx: e.clientX - flower.x,
      dy: e.clientY - flower.y,
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const idx = selectedIndexRef.current;
    if (idx === null) return;

    const newX = e.clientX - offsetRef.current.dx;
    const newY = e.clientY - offsetRef.current.dy;

    onUpdatePosition(idx, newX, newY);
  };

  const handleMouseUp = () => {
    selectedIndexRef.current = null;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="bouquet-canvas" style={{ position: 'relative', height: '100%', width: '100%' }}>
      {/* 버튼 */}
      <div style={{
        position: 'absolute',
        top: 10,
        right: 10,
        display: 'flex',
        gap: '10px',
        zIndex: 10,
      }}>
        <button onClick={onUndo} style={buttonStyle}>↩ 되돌리기</button>
        <button onClick={onClear} style={buttonStyle}>🗑 초기화</button>
      </div>

      {/* 화병 */}
      <img
        src="/assets/vase.png"
        alt="vase"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: 350,
          zIndex: 9999,
        }}
      />

      {/* 꽃들 */}
      {bouquet.map((flower, idx) => (
        <img
          key={idx}
          src={`/assets/${flower.name}.png`}
          alt={flower.name}
          onMouseDown={(e) => handleMouseDown(e, idx)}
          style={{
            position: 'absolute',
            left: flower.x,
            top: flower.y,
            width: 150,
            cursor: 'grab',
            userSelect: 'none',
            zIndex: 10 + idx,
          }}
        />
      ))}
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#fff0e6',
  border: '1px solid #ffb997',
  borderRadius: '8px',
  padding: '6px 12px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default BouquetCanvas;
