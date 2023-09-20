import React, { useState } from "react";
import "./popup.css";

const CloseApplication = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="popup">
        <div className="popup-content">
          <span className="popup-close" onClick={onClose}>
            &times;
          </span>
          {children}
        </div>
      </div>
    )
  );
};

export default CloseApplication;
