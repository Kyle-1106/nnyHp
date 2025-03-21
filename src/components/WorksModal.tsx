import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={image} alt={title} />
          </div>
          <div className="modal-info">
            <h3 className="modal-title">{title}</h3>
            <p className="modal-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksModal; 