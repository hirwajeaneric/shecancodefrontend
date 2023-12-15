// PopupMessage.js

import React, { useState } from 'react';
import './PopupMessage.css';

const PopupMessage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>

      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <p>This is a simple popup message!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupMessage;
