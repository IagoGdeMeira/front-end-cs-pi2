import './ErrorBox.css';

import React from 'react';


const ErrorPopup = ({ message, visible, onClose }) => {
    if (!visible) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <span className="popup-message">{message}</span>
                <div>
                    <button className="popup-close-button" onClick={onClose}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPopup;