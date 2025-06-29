import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ButtonStyle.css'; 

function LandingPage() {
  const navigate = useNavigate();

  const containerStyle = {
    height: '100vh',
    backgroundImage: 'url("/assets/background1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };


  const titleStyle = {
    fontFamily: "'Sacramento', cursive",
    fontSize: '9.3rem',
    color: '#AACB73',
    marginBottom: '5px',
  };

  const dummyButtonHandler = () => {
    alert('아직 개발 중입니다. 조금만 기다려주세요!');
  };

  const buttonRowStyle = {
    display: 'flex',
    flexDirection: 'row', // 중요: 가로 정렬
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0px',
    marginTop: '10px',
  };


  return (
    <div style={containerStyle}>
      <div>
        <div style={titleStyle}>Flover</div>
      </div>
     <div style={buttonRowStyle}>
        <button className="simulator-button" onClick={dummyButtonHandler}>우리집 근처 꽃집 찾기</button>
        <button className="simulator-button" onClick={() => navigate('/simulator')}>꽃 시뮬레이션</button>
        <button className="simulator-button" onClick={dummyButtonHandler}>FloverAI</button>
      </div>
    </div>
  );
}

export default LandingPage;
