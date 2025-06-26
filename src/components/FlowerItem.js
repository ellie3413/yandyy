// components/FlowerItem.js
import React from 'react';

function FlowerItem({ flower, index, onMouseDown }) {
  return (
    <img
      src={`/assets/${flower.name}.png`}
      alt={flower.name}
      onMouseDown={(e) => onMouseDown(e, index)}
      style={{
        position: 'absolute',
        left: flower.x,
        top: flower.y,
        width: 200,
        cursor: 'grab',
        userSelect: 'none',
        zIndex: 10 + index,
      }}
    />
  );
}

export default FlowerItem;
