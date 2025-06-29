// src/utils/kakaoInit.js

/**
 * Kakao JavaScript SDK를 초기화한다.
 * - window.Kakao 객체가 존재하고, 아직 초기화되지 않았다면
 *   process.env.REACT_APP_KAKAO_JS_KEY로 SDK를 init() 한다.
 */
export function initKakao() {
    if (typeof window === 'undefined') return;              // 서버 사이드 렌더링 방지
    if (window.Kakao && !window.Kakao.isInitialized()) {
      const jsKey = process.env.REACT_APP_KAKAO_JS_KEY;
      if (!jsKey) {
        console.error('🔴 REACT_APP_KAKAO_JS_KEY가 설정되어 있지 않습니다.');
        return;
      }
      window.Kakao.init(jsKey);
      console.log('✅ Kakao SDK initialized:', window.Kakao.isInitialized());
    }
  }