import React, { useState , useRef} from 'react';
import Header from '../components/header';
import FlowerPanel from '../components/FlowerPanel';
import BouquetCanvas from '../components/BouquetCanvas';
import './styles.css';
import axios from 'axios';
import { Popup } from '../components/popup';
import html2canvas from 'html2canvas';

window.Kakao.init('43ee9fbea365f188f9a041cf3563e676');


function SimulatorPage() {
  const [bouquet, setBouquet] = useState([]);

  const [bgColor, setBgColor] = useState('white'); // 기본 배경색

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
  setBgColor('white'); 
};

  const handleUndo = () => setBouquet(prev => prev.slice(0, -1));




//코드 합치는 부분


  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);


  const canvasRef = useRef(null);

  const handleOpenPopup = async () => {
    const el = canvasRef.current;
    if (!el) return;
  
    // 1) 캔버스 스냅샷
    const original = await html2canvas(el, { useCORS: true, backgroundColor: 'null' });
  
    // 2) 정사각으로 크롭
    const side  = Math.min(original.width-100, original.height-100);
    const x     = (original.width - side)  / 2;
    const y     = (original.height - side)-50;
    const square = document.createElement('canvas');
    square.width = square.height = side;
    const ctx = square.getContext('2d');
    ctx.drawImage(original, x, y, side, side, 0, 0, side, side);
  
    // 3) dataURL 저장 & 팝업 열기
    setCapturedImage(square.toDataURL('image/png'));
      setIsPopupOpen(true);
    };


    const handleShare = (message) => {
      console.log(setCapturedImage, 'setCapturedImage');
      window.Kakao.Share.sendCustom({
          templateId: 121899,
          templateArgs: {
            THU: setCapturedImage,////여기가 수정해야함, 이미지 주소 넣어야함
            message: message,
          },
        });
    };
  





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
  ref={canvasRef}
  onShare={handleOpenPopup}
        />
      {isPopupOpen ? <Popup 
      openModal={isPopupOpen} 
      setOpenModal={setIsPopupOpen} 
      imageSrc={capturedImage} 
      handleShare={handleShare} /> : null}  
      </div>
    </div>
  );
}

export default SimulatorPage;
