import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    fontSize: '8rem',
    color: '#AACB73',
    marginBottom: '10px',
  };

  const buttonStyle = {
    marginTop: '40px',
    padding: '14px 28px',
    fontSize: '1rem',
    backgroundColor: '#CDE990',
    border: 'none',
    borderRadius: '8px',
    color: 'A0C878',
    cursor: 'pointer',
    fontFamily: "'IBM Plex Sans KR', sans-serif",
  };

  return (
    <div style={containerStyle}>
      <div>
        <div style={titleStyle}>Flover</div>
      </div>
      <button style={buttonStyle} onClick={() => navigate('/simulator')}>
        시뮬레이션 하러 가기 →
      </button>
    </div>
  );
}

export default LandingPage;
