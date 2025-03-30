import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

interface WorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
}

const WorksModal: React.FC<WorksModalProps> = ({ 
  isOpen, 
  onClose, 
  image, 
  title, 
  description
}) => {
  if (!isOpen) return null;

  // モーダル外をクリックした時に閉じる
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content works-modal">
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-body">
          <div className="modal-image-container">
            <div className="modal-image">
              <img src={image} alt={title} />
            </div>
          </div>
          <div className="modal-info">
            <div className="modal-info-content">
              <h3 className="modal-title">{title}</h3>
              <div className="highlight-points">
                <div className="highlight-points-header">
                  <FontAwesomeIcon icon={faStar} className="star-icon" />
                  <span>こだわりポイント</span>
                </div>
                <div className="highlight-points-content">
                  <div className="highlight-point">
                    <span className="point-marker"></span>
                    優しい色合いと柔らかな雰囲気
                  </div>
                  <div className="highlight-point">
                    <span className="point-marker"></span>
                    細部までこだわった装飾
                  </div>
                </div>
              </div>
              <div className="modal-description-container">
                <p className="modal-description">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksModal; 