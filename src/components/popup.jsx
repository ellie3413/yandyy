import { useState } from "react";
import "./popup.css";

export const Popup = ({ openModal, setOpenModal, imageSrc, handleShare }) => {
  const [inputText, setInputText] = useState('');
  return (
    <div className="Overlay">
      <div className="cart-container">
        <span className="product-name">당신의 꽃다발</span>
        <div className="image-container">
        {/* ❹ 캡처된 이미지 렌더링 */}
       {imageSrc ? (
         <img
           src={imageSrc}
           alt="캡처된 부케"
           style={{ width: '300px', height: '300px', objectFit: 'cover', margin: '10px' }}
         />
       ) : (
         <div style={{ width: '100px', height: '100px', background: '#f0f0f0', margin: '10px 0' }}>
           이미지 불러오는 중…
         </div>
       )}
       </div>


        <span className="total-price">
          <input 
          type="text" 
          className="input-text" 
          placeholder="전하고 싶은 말을 적어주세요." 
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          />
        </span>
       
       <div className="button-container">
        <button
          className="cancle"
          type="button"
          onClick={() => {
            setOpenModal(false); // 클릭 이벤트로 모달창 닫히게 하기
          }}>
          취소
        </button>
        {!openModal ? setOpenModal(true) : null}
        <button 
        className="add-cart" 
        type="button" 
        onClick={() => handleShare(inputText)}>
          카카오톡 공유하기
        </button>
        </div>


      </div>
    </div>
  );
};