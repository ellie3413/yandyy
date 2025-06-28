import React from 'react';

function FlowerControl({ index, onUpdateSize, onUpdateRotation, onRemove }) {
  if (index === null || index === undefined) return null;

  return (
    <div style={controlPanelStyle}>
      <h4 style={{ margin: '4px 0' }}>🌸 꽃 속성 변경</h4>
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        <button onClick={() => onUpdateSize(index, +10)} style={ctrlBtn}>＋</button>
        <button onClick={() => onUpdateSize(index, -10)} style={ctrlBtn}>－</button>
        <button onClick={() => onUpdateRotation(index, -5)} style={ctrlBtn}>↪️</button>
        <button onClick={() => onUpdateRotation(index, +5)} style={ctrlBtn}>↩️</button>
        <button onClick={() => onRemove(index)} style={deleteBtn}>❌ 삭제</button>
      </div>
    </div>
  );
}

const controlPanelStyle = {
  position: 'absolute',
  top: 60,
  right: 10,
  backgroundColor: '#fffaf0',
  border: '2px solid #ffb997',
  borderRadius: '10px',
  padding: '10px',
  zIndex: 1000,
  minWidth: '160px',
  fontFamily: 'IBM Plex Sans KR',
};

const ctrlBtn = {
  padding: '6px 10px',
  fontSize: '13px',
  cursor: 'pointer',
  backgroundColor: '#fff0e6',
  border: '1px solid #ffb997',
  borderRadius: '4px',
};

const deleteBtn = {
  ...ctrlBtn,
  color: '#fff',
  backgroundColor: '#ff6b6b',
  borderColor: '#ff6b6b',
};

export default FlowerControl;
