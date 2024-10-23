import styles from "./DisciplineCreate.module.css";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from 'primereact/inputtext';
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import DisciplineDetails from "../../components/DisciplineDetails/DisciplineDetails";
import ErrorPopup from "../../components/ErrorBox/ErrorPopup";
import DeletePopup from "../../components/DeletePopup/DeletePopup";


const DisciplineCreate = () => {
    const [discipline, setDiscipline] = useState({ disciplineName: "", disciplineCode: "" });
    const navigate = useNavigate();
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupDeleteVisible, setPopupDeleteVisible] = useState(false);
    const [popupDeleteMessage, setPopupDeleteMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDiscipline((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const save = () => {
        localStorage.setItem("disciplineName", discipline.disciplineName);
        localStorage.setItem("disciplineCode", discipline.disciplineCode);
    };

    const disciplineExists = () => {
        if (isNameEmpty()) {
            setPopupMessage("Nome da disciplina não pode ser vazio");
            setPopupVisible(true);
        } else if (isCodeEmpty()) {
            setPopupMessage("Código da disciplina não pode ser vazio");
            setPopupVisible(true);
        } else if (localStorage.getItem("disciplineCode") === discipline.disciplineCode) {
            setPopupMessage("Código da disciplina já existe");
            setPopupVisible(true);
        } else {
            save();
            navigateHome();
        }
    };

    const isNameEmpty = () => {
        return !discipline.disciplineName || String(discipline.disciplineName).trim() === '';
    };

    const isCodeEmpty = () => {
        return !discipline.disciplineCode || String(discipline.disciplineCode).trim() === '';
    };

    const navigateHome = () => {
        navigate('/');
    };

    const popupDelete = () => {
        setPopupDeleteMessage("Digite o código da disciplina para confirmar a exclusão");
        setPopupDeleteVisible(true);
    };

    const [dialogVisible, setDialogVisible] = useState(false);

    return (
        <>
            <Card className={styles.card}>
                <div className={`${styles.card} flex justify-content-center`}>
                    <InputText
                        className={styles['text-box']} 
                        onChange={handleChange}
                        name="disciplineName"
                        id="disciplineName"
                        value={discipline.disciplineName} 
                        placeholder="Nome Disciplina"
                    />
                </div>
                <div className={`${styles.card} flex justify-content-center`}>
                    <InputNumber
                        className={styles['text-box']} 
                        onChange={(e) => setDiscipline({ ...discipline, disciplineCode: e.value })} 
                        useGrouping={false}
                        name="disciplineCode"
                        id="disciplineCode"
                        value={discipline.disciplineCode} 
                        placeholder="Código disciplina"
                    />
                </div>
                <div className={`${styles.card} flex justify-content-center`}>
                    <Button className={styles['button-box']} onClick={navigateHome} label="Cancelar" />
                    <Button className={styles['button-box']} onClick={disciplineExists} label="Salvar" />
                </div>
                <div>
                    <Button onClick={popupDelete}><i className="pi pi-trash" /></Button>
                </div>
                <DisciplineDetails
                    dVisible={dialogVisible}
                    onClose={()=> setDialogVisible(false)}/>
                <ErrorPopup
                    message={popupMessage}
                    visible={popupVisible}
                    onClose={() => setPopupVisible(false)}
                />
                <DeletePopup
                    message={popupDeleteMessage}
                    visible={popupDeleteVisible}
                    onClose={() => setPopupDeleteVisible(false)}
                />
            </Card>
        </>
    );
};

export default DisciplineCreate;
