import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './WeddingOptionModal.css';

interface WeddingOptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  description?: string;
}

const WeddingOptionModal: React.FC<WeddingOptionModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  images,
  description 
}) => {
  if (!isOpen) return null;

  // カルーセル設定
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true
  };

  // モーダル外をクリックした時に閉じる
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="option-modal-backdrop" onClick={handleBackdropClick}>
      <div className="option-modal-content" onClick={e => e.stopPropagation()}>
        <div className="option-modal-body">
          <div className="option-modal-image">
            <button className="option-modal-close" onClick={onClose} style={{ zIndex: 1000 }}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {images.length > 1 ? (
              <Slider {...carouselSettings}>
                {images.map((img, index) => (
                  <div key={index} className="option-carousel-item">
                    <img src={img} alt={`${title} - 画像 ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            ) : (
              <img src={images[0]} alt={title} />
            )}
          </div>
          {description && (
            <div className="option-modal-description">
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeddingOptionModal; 