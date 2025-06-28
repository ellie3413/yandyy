import React from 'react';

const Footer = () => { 

  const footerStyle = {
    backgroundColor: '#fff9c4',
    fontSize: "12px",
    fontFamily: "Schoolbell",
    color: '#282c34',
    padding: '5px',
    textAlign: 'center',
    position: 'sticky', // fixed 대신 sticky 사용
    bottom: 0,
    width: '100%',
    borderTop: '1px solid #ffe082',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 YandYY. All rights reserved. This website is created with React.</p>
    </footer>
  );
};

export default Footer;