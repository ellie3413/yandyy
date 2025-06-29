import "./popup.css";

export const Popup = ({ openModal, setOpenModal, handleShare }) => {

  return (
    <div className="Overlay">
      <div className="cart-container">
        <span className="product-name">당신의 꽃다발</span>
        <span className="product-price">꽃 이미지</span>
        <span className="total-price"><input type="text" placeholder="꽃 이미지 추가" /></span>
        <button
          className="cancle"
          type="button"
          onClick={() => {
            setOpenModal(false); // 클릭 이벤트로 모달창 닫히게 하기
          }}>
          취소
        </button>
        {!openModal ? setOpenModal(true) : null}
        <button className="add-cart" type="button" onClick={handleShare}>
          카카오톡 공유하기
        </button>
      </div>
    </div>
  );
};