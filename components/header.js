// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';  // 추가

export default function Header({ isLoggedIn, onLogout }) {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Flover</h1>

      {isLoggedIn ? (
        <button onClick={onLogout} style={buttonStyle}>
          카카오 로그아웃
        </button>
      ) : (
        <Link to="/kakao/login" style={linkStyle}>
          카카오 로그인
        </Link>
      )}
    </header>
  );
}

const headerStyle = {
  width: '100%',
  padding: '16px 0',
  backgroundColor: '#fff0f5',
  textAlign: 'center',
  borderBottom: '2px solid #ffc2d1',
  position: 'sticky',
  top: 0,
  zIndex: 99999,
};

const titleStyle = {
  margin: 0,
  fontSize: '2rem',
  fontFamily: `'Schoolbell', serif`,
  letterSpacing: '2px',
  color: '#ff6f91',
};

const linkStyle = {
  marginLeft: '10px',
  color: '#ff6f91',
  textDecoration: 'none',
  fontSize: '1.2rem',
};

const buttonStyle = {
  marginLeft: 'auto',
  fontSize: '1rem',
  padding: '6px 12px',
  backgroundColor: '#fff0e6',
  border: '1px solid #ffb997',
  borderRadius: '8px',
  cursor: 'pointer',
  color: '#ff6f91',
  fontWeight: 'bold',
};