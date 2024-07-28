import React from "react";
import "./modal.css";

const Modal = ({
  message,
  onClose,
  showCloseButton = false,
  backgroundColor = "#fff",
}) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" style={{ backgroundColor }}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
        {showCloseButton && (
          <button className="close-modal-button" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
