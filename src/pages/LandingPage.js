import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={landingStyle}>
      <h1 style={{ fontFamily: 'IBM Plex Sans KR', fontSize: '2.5rem' }}>🌼 꽃다발 시뮬레이터 🌼</h1>
      <p style={{ margin: '20px 0', fontSize: '1.2rem' }}>
        당신만의 꽃다발을 만들어 보세요!
      </p>
      <button
        style={buttonStyle}
        onClick={() => navigate('/simulator')}
      >
        시뮬레이션 하러 가기 →
      </button>
    </div>
  );
}

const landingStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#fff4ea',
};

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '1.1rem',
  backgroundColor: '#ffb997',
  border: 'none',
  borderRadius: '8px',
  color: 'white',
  cursor: 'pointer',
  fontFamily: 'IBM Plex Sans KR',
};

export default LandingPage;
