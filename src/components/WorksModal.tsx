import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar } from '@fortawesome/free-solid-svg-icons';
import './WorksModal.css';

interface WorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  highlightPoints?: string[];
}

const WorksModal: React.FC<WorksModalProps> = ({ 
  isOpen, 
  onClose, 
  image, 
  title, 
  description,
  highlightPoints = []
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
              {highlightPoints.length > 0 && (
                <div className="highlight-points">
                  <div className="highlight-points-header">
                    <FontAwesomeIcon icon={faStar} className="star-icon" />
                    <span>こだわりポイント</span>
                  </div>
                  <div className="highlight-points-content">
                    {highlightPoints.map((point, index) => (
                      <div key={index} className="highlight-point">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              )}
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