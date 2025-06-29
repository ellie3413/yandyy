// components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header style={headerStyle}>
      <div style={headerContentStyle}>
        <button style={homeButtonStyle} onClick={() => navigate('/')}>
          ◃ Main Page
        </button>
        <h1 style={titleStyle}>Flover</h1>
        <div style={{ width: 80 }} /> {/* 오른쪽 공간 확보용 (버튼 없는 쪽 균형) */}
      </div>
    </header>
  );
}

const headerStyle = {
  width: '100%',
  padding: '3px 0',
  backgroundColor: '#FFEDFA',
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
  fontFamily: "'Sacramento', cursive",
  letterSpacing: '0px',
  color: '#AACB73',
};

const homeButtonStyle = {
  backgroundColor: '#FFEDFA',
  border: 'none',
  borderRadius: '6px',
  padding: '3px 10px',
  color: 'navy',
  fontSize: '1rem',
  cursor: 'pointer',
  fontFamily: `'Roboto Serif', serif`,
};

export default Header;
