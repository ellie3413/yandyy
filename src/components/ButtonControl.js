// components/CanvasControls.js
import React from 'react';
import '../pages/ButtonStyle.css'; 

function ButtonControls({ onUndo, onClear, onChangeBackground, onShare }) {
  return (
    <div style={controlStyle}>
      <button className="new-simulator-button" onClick={onUndo} >되돌리기</button>
      <button className="new-simulator-button" onClick={onClear} >초기화</button>
      <button className="new-simulator-button" onClick={onChangeBackground} > 배경색 변경하기 </button>
      <button className="new-simulator-button" onClick={onShare} >🔗카카오 공유하기</button>
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

export default ButtonControls;
