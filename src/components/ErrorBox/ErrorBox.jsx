import React from 'react';
import './ErrorBox.css'; // Arquivo CSS para estilos personalizados

const ErrorPopup = ({ message, visible, onClose }) => {
    if (!visible) return null; // Se o popup não estiver visível, não renderiza nada

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
