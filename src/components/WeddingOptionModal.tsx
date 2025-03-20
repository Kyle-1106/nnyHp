import React from 'react';
import './WeddingOptionModal.css';

interface WeddingOptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  description?: string;
}

const WeddingOptionModal: React.FC<WeddingOptionModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  image, 
  description 
}) => {
  if (!isOpen) return null;

  return (
    <div className="option-modal-backdrop" onClick={onClose}>
      <div className="option-modal-content" onClick={e => e.stopPropagation()}>
        <button className="option-modal-close" onClick={onClose}>×</button>
        <div className="option-modal-header">
          <h3>{title}</h3>
        </div>
        <div className="option-modal-body">
          <div className="option-modal-image">
            <img src={image} alt={title} />
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