// src/components/KakaoLogin.jsx
import React from 'react';
console.log('✅ KakaoLogin 렌더됨');

export default function KakaoLogin() {
  const REST_KEY    = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  const loginWithKakao = () => {
    const kakaoAuthURL = [
      'https://kauth.kakao.com/oauth/authorize',
      `?client_id=${REST_KEY}`,
      `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`,
      '&response_type=code'
    ].join('');

    // 콘솔에 URL이 올바른지 한 번 찍어 보고
    console.log('→ kakaoAuthURL =', kakaoAuthURL);
    // 실제 인가 페이지로 이동
    window.location.href = kakaoAuthURL;
  };

  return (
    <button onClick={loginWithKakao} style={{ padding: '8px 16px', fontSize: '1rem' }}>
      카카오 로그인
    </button>
  );
}
