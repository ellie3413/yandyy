function FlowerItem({ flower, index, onMouseDown, onUpdateSize }) {
  const size = flower.size || 100; // 기본값 설정

  return (
    <div style={{
      position: 'absolute',
      left: flower.x,
      top: flower.y,
      zIndex: 10 + index,
      textAlign: 'center',
    }}>
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
      <div>
        <button onClick={() => onUpdateSize(index, +10)} style={resizeBtn}>＋</button>
        <button onClick={() => onUpdateSize(index, -10)} style={resizeBtn}>－</button>
      </div>
    </div>
  );
}

const resizeBtn = {
  margin: '2px',
  padding: '2px 6px',
  fontSize: '12px',
  cursor: 'pointer',
};

export default FlowerItem;
