import React, { useState , useEffect} from 'react';
import Header from './components/header'; // 추가
import FlowerPanel from './components/FlowerPanel';
import BouquetCanvas from './components/BouquetCanvas';
import KakaoLogin from './components/KakaoLogin';
import { initKakao } from './components/KakaoInit';
import './styles.css';
import axios from 'axios';
import { Popup } from './components/popup';
window.Kakao.init('43ee9fbea365f188f9a041cf3563e676');
function App() {
  const [bouquet, setBouquet] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // 1) 마운트 시 세션에 토큰이 있으면 로그인 상태로
  useEffect(() => {
    const token = sessionStorage.getItem('kakao_token');
    setIsLoggedIn(!!token);
  }, []);
  
  // 2) 로그아웃 핸들러
  const handleLogout = async () => {
    const token = sessionStorage.getItem('kakao_token');
    if (token) {
      try {
        // 카카오 로그아웃 API 호출
        await axios.post(
          'https://kapi.kakao.com/v1/user/logout',
          {}, 
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (e) {
        console.warn('카카오 로그아웃 API 호출 중 에러', e);
      }
    }
    sessionStorage.removeItem('kakao_token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userInfo');
    setIsLoggedIn(false);
  };
  // 3) 로그인 성공 시 토큰 저장
  const handleLoginSuccess = (token) => {
    sessionStorage.setItem('kakao_token', token);
    setIsLoggedIn(true);
  };


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
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleShare = () => {
    window.Kakao.Share.sendCustom({
        templateId: 121899,
        templateArgs: {
          title: '제목 영역입니다.',
          description: '설명 영역입니다.',
        },
      });
  };



    return (
        <div>
          {/* isLoggedIn 과 onLogout 을 반드시 넘겨줍니다 */}
          <Header
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
      <div className="app-layout">
        <FlowerPanel onSelect={handleAddFlower} />
        <BouquetCanvas
          bouquet={bouquet}
          onClear={handleClear}
          onUndo={handleUndo}
          onUpdatePosition={handleUpdatePosition}
          onShare={handleOpenPopup}
        />
        {isPopupOpen ? <Popup openModal={isPopupOpen} setOpenModal={setIsPopupOpen} handleShare={handleShare} /> : null}
      </div>
    </div>
  );
}

export default App;
