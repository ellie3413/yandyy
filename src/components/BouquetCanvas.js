import React, { useRef } from 'react';
import ButtonControls from './ButtonControl';
import FlowerItem from './FlowerItem';

function BouquetCanvas({ bouquet, onClear, onUndo, onUpdatePosition, onShare }) {

//이곳에 카카오 공유하기 버튼 추가




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
      {/* 우측 상단 버튼 */}
      <ButtonControls onUndo={onUndo} onClear={onClear} />

      {/* 화병 */}
      <img
        src="/assets/vase.png"
        alt="vase"
        style={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          height: 350,
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />

      {/* 꽃들 */}
      {bouquet.map((flower, idx) => (
        <FlowerItem
          key={idx}
          flower={flower}
          index={idx}
          onMouseDown={handleMouseDown}
        />
      ))}
    </div>
  );
}

export default BouquetCanvas;
