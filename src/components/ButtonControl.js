// components/CanvasControls.js
import React from 'react';

function ButtonControls({ onUndo, onClear }) {
  return (
    <div style={controlStyle}>
      <button onClick={onUndo} style={buttonStyle}>↩ 되돌리기</button>
      <button onClick={onClear} style={buttonStyle}>🗑 초기화</button>
    </div>
  );
}

const controlStyle = {
  position: 'absolute',
  top: 10,
  right: 10,
  display: 'flex',
  gap: '10px',
  zIndex: 10,
};

const buttonStyle = {
  backgroundColor: '#fff0e6',
  border: '1px solid #ffb997',
  borderRadius: '8px',
  padding: '6px 12px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontFamily: 'IBM Plex Sans KR',
};

export default ButtonControls;
