import React, { useState } from "react";
import './DeletePopup.css';
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";
import ErrorPopup from "../ErrorBox/ErrorPopup.jsx";

const DeletePopup = ({ message, visible, onClose }) => {
    const [codeDelete, setCodeDelete] = useState("");
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    if (!visible) return null;

    const handleChange = (input) => {
        setCodeDelete(input.target.value);
    }

    const DeleteDiscipline = () => {
        if (localStorage.getItem("disciplineCode") == localStorage.getItem("codeDelete")) {
            localStorage.setItem("disciplineCode", "");
            localStorage.setItem("disciplineName", "");
            return true;
        }
    }

    const saveCodeDelete = () => {
        localStorage.setItem("codeDelete", codeDelete);
        if(isCodeEmpty()) {
            setPopupMessage("Código da disciplina não pode ser vazio");
            setPopupVisible(true);
        }else if(!isCodeEqual()){
            setPopupMessage("Código da disciplina é diferente");
            setPopupVisible(true);
        }else{
            DeleteDiscipline();
            onClose();
        }

    }

    const isCodeEmpty = () => {
        return codeDelete.trim() === '';
    }

    const isCodeEqual = () =>{
        if (localStorage.getItem("disciplineCode") == codeDelete){
            return true;
        }else{
            return false
        }
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <span className="popup-message">{message}</span>
                <div>
                    <InputText className="popup-input" onChange={handleChange} label="Codigo da disciplina" name="codeDelete" id="codeDelete" type="text" placeholder="Codigo da disciplina"/>
                </div>
                <div>
                    <Button className="popup-close-button" onClick={onClose}>Cancelar</Button>
                    <Button className="popup-delete-button" onClick={saveCodeDelete} disabled={codeDelete != localStorage.getItem("disciplineCode")}>Deletar Disciplina</Button>

                </div>
            </div>
            <ErrorPopup
                message={popupMessage}
                visible={popupVisible}
                onClose={() => setPopupVisible(false)}
            />
        </div>
    );
}

export default DeletePopup;
