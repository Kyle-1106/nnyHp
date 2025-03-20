import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// カスタム矢印コンポーネント
const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow prev-arrow`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow next-arrow`} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

interface VoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  category: string;
  images: string[];
}

const VoiceModal: React.FC<VoiceModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  category,
  images
}) => {
  if (!isOpen) return null;

  // カルーセル設定
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  // モーダル外をクリックした時に閉じる
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content voice-modal">
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-body">
          <div className="modal-image">
            {images.length > 1 ? (
              <Slider {...carouselSettings}>
                {images.map((img, index) => (
                  <div key={index} className="voice-carousel-item">
                    <img src={img} alt={`${title} - 画像 ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            ) : (
              <img src={images[0]} alt={title} />
            )}
          </div>
          <div className="modal-info">
            <span className="modal-category">{category}</span>
            <h3 className="modal-title">{title}</h3>
            <div className="modal-description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceModal; 