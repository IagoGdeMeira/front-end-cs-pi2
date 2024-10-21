import React, { useState } from "react";
import styles from './DeletePopup.module.css'; // Importando o módulo CSS
import { InputNumber } from 'primereact/inputnumber';
import { Button } from "primereact/button";
import ErrorPopup from "../ErrorBox/ErrorPopup.jsx";
import ConfirmDeletePopup from "../ConfirmDeletePopup/ConfirmDeletePopup.jsx";

const DeletePopup = ({ message, visible, onClose }) => {
    const [codeDelete, setCodeDelete] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupConfirmDeletionMessage, setPopupConfirmDeletionMessage] = useState('');
    const [popupConfirmDeletionVisible, setPopupConfirmDeletionVisible] = useState(false);

    if (!visible) return null;

    const handleChange = (e) => {
        setCodeDelete(e.value);
    };

    const DeleteDiscipline = () => {
        if (isCodeEmpty()) {
            setPopupMessage("Código da disciplina não pode ser vazio");
            setPopupVisible(true);
        } else if (!isCodeEqual()) {
            setPopupMessage("Código da disciplina é diferente");
            setPopupVisible(true);
        } else {
            localStorage.removeItem("disciplineCode");
            localStorage.removeItem("disciplineName");
            popupConfirmDeletion();
        }
    };

    const isCodeEmpty = () => {
        return !codeDelete;
    };

    const isCodeEqual = () => {
        return String(localStorage.getItem("disciplineCode")) === String(codeDelete); // Compara como strings
    };

    const popupConfirmDeletion = () => {
        setPopupConfirmDeletionMessage("Disciplina Excluída");
        setPopupConfirmDeletionVisible(true);
        setTimeout(() => {
            setPopupConfirmDeletionVisible(false);
            onClose();
        }, 2000);
    };

    return (
        <>
            <div className={styles['popup-overlay']} onClick={onClose}>
                <div className={styles['popup-content']} onClick={(e) => e.stopPropagation()}>
                    <span className={styles['popup-message']}>{message}</span>
                    <div>
                        <InputNumber
                            className={styles['popup-input']}
                            value={codeDelete}
                            onChange={handleChange}
                            useGrouping={false}
                            placeholder="Código da disciplina"
                        />
                    </div>
                    <div>
                        <Button className={styles['popup-close-button']} onClick={onClose}>Cancelar</Button>
                        <Button
                            className={styles['popup-delete-button']}
                            onClick={DeleteDiscipline}
                            disabled={String(localStorage.getItem("disciplineCode")) != String(codeDelete) || localStorage.getItem("disciplineCode") == null}>
                            Deletar Disciplina
                        </Button>
                    </div>
                </div>
            </div>

            <ErrorPopup
                message={popupMessage}
                visible={popupVisible}
                onClose={() => setPopupVisible(false)}
            />

            <ConfirmDeletePopup
                message={popupConfirmDeletionMessage}
                visible={popupConfirmDeletionVisible}
                onClose={() => setPopupConfirmDeletionVisible(false)}
            />
        </>
    );
}

export default DeletePopup;
