import React, { useRef, useState } from 'react';
import ButtonControls from './ButtonControl';
import FlowerItem from './FlowerItem';
import FlowerControl from './FlowerControl';


const vaseOptions = [
  'ribbonvase.png',
  'bluevase.png',
  'purplevase.png',
  'smallvase.png',
  'largevase.png'
];

function BouquetCanvas({ bouquet, onClear, onUndo, onUpdatePosition, onUpdateSize, 
  onRemove, bgColor, onChangeBackground, onRotate, onMoveForward, onMoveBackward }) {
  const selectedIndexRef = useRef(null);
  const offsetRef = useRef({ dx: 0, dy: 0 });
  const [vaseIndex, setVaseIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);


  const handleMouseDown = (e, idx) => {
    const flower = bouquet[idx];
    

    selectedIndexRef.current = idx;
    setSelectedIndex(idx);
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

  const handleVaseChange = () => {
    setVaseIndex((prev) => (prev + 1) % vaseOptions.length);
  };

  return (
    <div className="bouquet-canvas" style={{ position: 'relative', height: '100%', width: '100%', backgroundColor: bgColor, }}>
      {/* 우측 상단 버튼 */}
      <ButtonControls onUndo={onUndo} onClear={onClear} onChangeBackground={onChangeBackground} />
      <FlowerControl
        index={selectedIndex}
        onUpdateSize={onUpdateSize}
        onUpdateRotation={onRotate}
        onRemove={(idx) => {
          onRemove(idx);
          setSelectedIndex(null);
        }}
/>


      {/* 화병 */}
      <img
        src={`/assets/${vaseOptions[vaseIndex]}`}
        alt="vase"
        style={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          height: 270,
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />

      {/* 화병 변경 버튼 */}
      <button
        onClick={handleVaseChange}
        style={{
          position: 'absolute',
          bottom: 35,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10000,
          backgroundColor: 'rgba(170, 203, 115, 0.4)',
          border: '1px solid #6E9D30',
          fontFamily: 'IBM Plex Sans KR',
          borderRadius: '8px',
          padding: '6px 12px',
          cursor: 'pointer',
        }}
      >
        화분 바꾸기
      </button>

      {/* 꽃들 */}
      {bouquet.map((flower, idx) => (
        <FlowerItem
          key={idx}
          flower={flower}
          index={idx}
          onMouseDown={handleMouseDown}
          onRemove={onRemove}
          onMoveForward={onMoveForward}
          onMoveBackward={onMoveBackward}
        />


      ))}


    </div>
  );
}

export default BouquetCanvas;
