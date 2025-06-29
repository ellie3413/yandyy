// components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header style={headerStyle}>
      <div style={headerContentStyle}>
        <button style={homeButtonStyle} onClick={() => navigate('/')}>
          <img src="/assets/home.png" alt="Home" style={homeIconStyle} />
        </button>
        <h1 style={titleStyle}>Flover</h1>
        <div style={{ width: 40 }} /> {/* 오른쪽 여백으로 균형 유지 */}
      </div>
    </header>
  );
}

const headerStyle = {
  width: '100%',
  padding: '3px 0',
  backgroundColor: 'white',
  textAlign: 'left',
  borderBottom: '2px solid #AACB73',
  position: 'sticky',
  top: 0,
  zIndex: 99999,
};

const headerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 10px',
};

const titleStyle = {
  margin: 0,
  fontSize: '2.6rem',
  fontFamily: "'Grand Hotel', cursive",
  color: '#AACB73',
};

const homeButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
};

const homeIconStyle = {
  width: '32px',
  height: '32px',
};

export default Header;
