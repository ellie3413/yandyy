import React from 'react';

function FlowerControl({ index, onUpdateSize, onUpdateRotation, onRemove }) {
  if (index === null || index === undefined) return null;

  return (
    <div style={controlPanelStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <h4 style={{ margin: 0, display: 'flex', alignItems: 'center'  }}> 꽃 속성 변경: </h4>
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        <button onClick={() => onUpdateSize(index, +10)} style={ctrlBtn}>＋</button>
        <button onClick={() => onUpdateSize(index, -10)} style={ctrlBtn}>－</button>
        <button onClick={() => onUpdateRotation(index, -5)} style={ctrlBtn}>↪️</button>
        <button onClick={() => onUpdateRotation(index, +5)} style={ctrlBtn}>↩️</button>
        <button onClick={() => onRemove(index)} style={deleteBtn}>삭제</button>
      </div>
      </div>
    </div>
  );
}

const controlPanelStyle = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  top: 60,
  right: 10,
  backgroundColor: 'white',
  border: '1px solid #6E9D30',
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
  backgroundColor: 'rgba(170, 203, 115, 0.4)',
  border: '1px solid #6E9D30',
  borderRadius: '4px',
};

const deleteBtn = {
  ...ctrlBtn,
  color: '#fff',
  backgroundColor: 'rgba(117, 136, 87, 0.8)',
  borderColor: '#6E9D30',
};

export default FlowerControl;
