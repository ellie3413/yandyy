import React, { useState } from 'react';
import Header from '../components/header';
import FlowerPanel from '../components/FlowerPanel';
import BouquetCanvas from '../components/BouquetCanvas';
import './styles.css';

function SimulatorPage() {
  const [bouquet, setBouquet] = useState([]);

  const [bgColor, setBgColor] = useState('#fff4ea'); // 기본 배경색

  const handleChangeBackground = () => {
    // 랜덤 파스텔 색상 생성
    const pastel = () => {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 100%, 98%)`;
    };
    setBgColor(pastel());
  };

  const handleMoveForward = (index) => {
  setBouquet(prev => {
    if (index >= prev.length - 1) return prev;
    const newBouquet = [...prev];
    [newBouquet[index], newBouquet[index + 1]] = [newBouquet[index + 1], newBouquet[index]];
    return newBouquet;
  });
};

const handleMoveBackward = (index) => {
  setBouquet(prev => {
    if (index <= 0) return prev;
    const newBouquet = [...prev];
    [newBouquet[index], newBouquet[index - 1]] = [newBouquet[index - 1], newBouquet[index]];
    return newBouquet;
  });
};



  const handleAddFlower = (flowerName) => {
    setBouquet([
      ...bouquet,
      { name: flowerName, x: 150, y: 100, size: 120, rotation: 0 } 
    ]);
  };

  const handleRotateFlower = (index, delta) => {
  setBouquet(prev =>
    prev.map((flower, i) =>
      i === index ? { ...flower, rotation: flower.rotation + delta } : flower
    )
  );
};


  const handleUpdatePosition = (index, newX, newY) => {
    setBouquet(prev =>
      prev.map((f, i) =>
        i === index ? { ...f, x: newX, y: newY } : f
      )
    );
  };

  const handleUpdateSize = (index, delta) => {
    setBouquet(prev =>
      prev.map((flower, i) =>
        i === index
          ? { ...flower, size: Math.max(30, flower.size + delta) }
          : flower
      )
    );
  };

  const handleRemoveFlower = (index) => {
    setBouquet(prev => prev.filter((_, i) => i !== index));
  };

  const handleClear = () => {
  setBouquet([]);
  setBgColor('#fff4ea'); 
};

  const handleUndo = () => setBouquet(prev => prev.slice(0, -1));

  return (
    <div>
      <Header />
      <div className="app-layout">
        <FlowerPanel onSelect={handleAddFlower} />
        <BouquetCanvas
          bouquet={bouquet}
          onClear={handleClear}
          onUndo={handleUndo}
          onUpdatePosition={handleUpdatePosition}
          onRotate={handleRotateFlower} 
          onUpdateSize={handleUpdateSize}
          onRemove={handleRemoveFlower}
          bgColor={bgColor}
          onChangeBackground={handleChangeBackground} 
          onMoveForward={handleMoveForward}
  onMoveBackward={handleMoveBackward}
        />
      </div>
    </div>
  );
}

export default SimulatorPage;
