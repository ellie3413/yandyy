import React, { useState } from 'react';
import Header from './components/header'; // 추가
import FlowerPanel from './components/FlowerPanel';
import BouquetCanvas from './components/BouquetCanvas';
import './styles.css';
import Footer from './components/footer';

function App() {
  const [bouquet, setBouquet] = useState([]);

  const handleAddFlower = (flowerName) => {
    // 초기 위치 포함한 객체 추가
    setBouquet([
      ...bouquet,
      { name: flowerName, x: 150, y: 100 }
    ]);
  };

  const handleUpdatePosition = (index, newX, newY) => {
    setBouquet(prev =>
      prev.map((f, i) =>
        i === index ? { ...f, x: newX, y: newY } : f
      )
    );
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
        />
      </div>
    </div>
  );
}

export default App;
