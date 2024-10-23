import React from 'react';
import styles from './ConfirmDeletePopup.module.css'; 

const ConfirmDeletePopup = ({ message, visible}) => {
    if (!visible) return null;

    return (
        <div className={styles["popup-overlay"]}>
            <div className={styles["popup-content"]}>
                <span className={styles["popup-message"]}>{message}</span>
            </div>
        </div>
    );
};

export default ConfirmDeletePopup;
