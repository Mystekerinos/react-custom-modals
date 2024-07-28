import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({
  message,
  onClose,
  showCloseButton,
  backgroundColor,
  closeOnOutsideClick,
}) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (closeOnOutsideClick && event.target.className === "modal") {
        onClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [closeOnOutsideClick, onClose]);

  return (
    <div
      className="modal"
      style={{ backgroundColor: backgroundColor || "#fff" }}
    >
      <div className="modal-content">
        <p>{message}</p>
        {showCloseButton && <button onClick={onClose}>Close</button>}
      </div>
    </div>
  );
};

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  showCloseButton: PropTypes.bool,
  backgroundColor: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
};

Modal.defaultProps = {
  showCloseButton: false,
  backgroundColor: "#fff",
  closeOnOutsideClick: false,
};

export default Modal;
