// src/components/KakaoCallback.jsx
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function KakaoCallback() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const REST_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  // 1) 한 번만 실행하기 위한 플래그
  const hasFetchedToken = useRef(false);

  useEffect(() => {
    // 2) 이미 로그인 되어 있으면 바로 메인으로
    if (sessionStorage.getItem('kakao_token')) {
      navigate('/');
      return;
    }
    // 3) code가 없거나 혹은 이미 한 번 처리했다면 요청 중단
    if (!code || hasFetchedToken.current) {
      return;
    }

    // 토큰 교환 로직은 최초 한 번만
    hasFetchedToken.current = true;

    const fetchToken = async () => {
      try {
        // POST body를 문자열로 명시
        const params = new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: REST_KEY,
          redirect_uri: REDIRECT_URI,
          code,
        });

        const tokenRes = await axios.post(
          'https://kauth.kakao.com/oauth/token',
          params.toString(),
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );

        const accessToken = tokenRes.data.access_token;
        sessionStorage.setItem('kakao_token', accessToken);

        // 사용자 정보 조회
        const userRes = await axios.get(
          'https://kapi.kakao.com/v2/user/me',
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        const { id, kakao_account } = userRes.data;
        sessionStorage.setItem('userId', id);
        sessionStorage.setItem('userInfo', JSON.stringify(kakao_account));
        // ▶ 로그인된 유저 ID 콘솔에 출력
        console.log('✅ 로그인된 Kakao User ID:', id);
        // 로그인 완료 후 홈으로 이동
        navigate('/');
      } catch (error) {
        console.error('토큰 교환 중 에러:', error);
        // 에러가 400(잘못된 code)이면, 로그인 페이지로 되돌리기
        navigate('/kakao/login');
      }
    };

    fetchToken();
  }, [code, navigate, REDIRECT_URI, REST_KEY]);

  return <div>로그인 처리 중…</div>;
}
