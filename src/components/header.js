// components/Header.js
import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Flover</h1>
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

export default Header;
