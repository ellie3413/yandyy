import React, { useState } from 'react';
import Header from './components/header';
import FlowerPanel from './components/FlowerPanel';
import BouquetCanvas from './components/BouquetCanvas';
import './styles.css';

function App() {
  const [bouquet, setBouquet] = useState([]);

  const [bgColor, setBgColor] = useState('#fff4ea'); // 기본 배경색

  const handleChangeBackground = () => {
    // 랜덤 파스텔 색상 생성
    const pastel = () => {
      const hue = Math.floor(Math.random() * 360);
      return `hsl(${hue}, 100%, 90%)`;
    };
    setBgColor(pastel());
  };


  const handleAddFlower = (flowerName) => {
    setBouquet([
      ...bouquet,
      { name: flowerName, x: 150, y: 100, size: 100 } 
    ]);
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

  const handleClear = () => setBouquet([]);
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
          onUpdateSize={handleUpdateSize}
          onRemove={handleRemoveFlower}
          bgColor={bgColor}
          onChangeBackground={handleChangeBackground} 
        />
      </div>
    </div>
  );
}

export default App;
