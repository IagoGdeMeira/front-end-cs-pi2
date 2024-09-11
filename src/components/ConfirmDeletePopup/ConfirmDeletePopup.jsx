import React from 'react';
import './ConfirmDeletePopup.css'; 

const ConfirmDeletePopup = ({ message, visible}) => {
    if (!visible) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <span className="popup-message">{message}</span>
            </div>
        </div>
    );
};

export default ConfirmDeletePopup;
