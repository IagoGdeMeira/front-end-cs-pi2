import React, { useState } from "react";
import './DeletePopup.css';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import ErrorPopup from "../ErrorBox/ErrorPopup.jsx";
import ConfirmDeletePopup from "../ConfirmDeletePopup/ConfirmDeletePopup.jsx";

const DeletePopup = ({ message, visible, onClose }) => {
    const [codeDelete, setCodeDelete] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupConfirmDeletionMessage, setPopupConfirmDeletionMessage] = useState(false);
    const [popupConfirmDeletionVisible , SetPopupConfirmDeletionVisible] = useState(false);

    if (!visible) return null;

    const handleChange = (input) => {
        setCodeDelete(input.target.value);
    }

    const DeleteDiscipline = () => {
        localStorage.setItem("codeDelete", codeDelete);
        if (isCodeEmpty()) {
            setPopupMessage("Código da disciplina não pode ser vazio");
            setPopupVisible(true);
        } else if (!isCodeEqual()) {
            setPopupMessage("Código da disciplina é diferente");
            setPopupVisible(true);
        } else {
            localStorage.setItem("disciplineCode", "");
            localStorage.setItem("disciplineName", "");
            popupConfirmDeletion();
        }
    }

    const isCodeEmpty = () => {
        return codeDelete.trim() === '';
    }

    const isCodeEqual = () => {
        return localStorage.getItem("disciplineCode") === codeDelete;
    }

    const popupConfirmDeletion = () =>{
        setPopupConfirmDeletionMessage("Disciplina Excluída")
        SetPopupConfirmDeletionVisible(true);
        setTimeout(() => {
            SetPopupConfirmDeletionVisible(false);
            onClose();
        }, 2000);
        
    }
    return (
        <>
            <div className="popup-overlay" onClick={onClose}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <span className="popup-message">{message}</span>
                    <div>
                        <InputText
                            className="popup-input"
                            onChange={handleChange}
                            label="Codigo da disciplina"
                            name="codeDelete"
                            id="codeDelete"
                            type="text"
                            placeholder="Código da disciplina"
                        />
                    </div>
                    <div>
                        <Button className="popup-close-button" onClick={onClose}>Cancelar</Button>
                        <Button
                            className="popup-delete-button"
                            onClick={DeleteDiscipline}
                            disabled={codeDelete !== localStorage.getItem("disciplineCode")}>
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
                onClose={() => SetPopupConfirmDeletionVisible(false)}
            />
        </>
    );
}

export default DeletePopup;
