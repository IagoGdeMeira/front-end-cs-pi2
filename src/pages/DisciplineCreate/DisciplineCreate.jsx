import "./DisciplineCreate.css";

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import ErrorPopup from "../../components/ErrorBox/ErrorBox";
import { InputText } from 'primereact/inputtext';
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const DisciplineCreate = () =>{
    const [discipline, setDiscipline] = useState({disciplineName: "", disciplineCode: ""});
    const navigate = useNavigate();
    const [popupVisible, setPopupVisible] = useState(false); // Estado para controlar a visibilidade do popup
    const [popupMessage, setPopupMessage] = useState(''); // Mensagem do popup
    

    const handleChange = (input) => {
        setDiscipline({ ...discipline, [input.target.name]: input.target.value });
    }

    const save = () =>{
        localStorage.setItem("disciplineName", discipline.disciplineName);
        localStorage.setItem("disciplineCode", discipline.disciplineCode);
    }

    const disciplineExists = () =>{
        if (isNameEmpty()) {
            setPopupMessage("Nome da disciplina não pode ser vazio");
            setPopupVisible(true);
        } else if (isCodeEmpty()) {
            setPopupMessage("Código da disciplina não pode ser vazio");
            setPopupVisible(true);
        }else if (localStorage.getItem("disciplineCode") == discipline.disciplineCode){
            setPopupMessage("Código da disciplina já existe");
            setPopupVisible(true);
        }else{
            save();
            navigateHome();
        }
    }
    
    const isNameEmpty = () => {
        return discipline.disciplineName.trim() === '';
    };

    const isCodeEmpty = () => {
        return discipline.disciplineCode.trim() === '';
    }

    const navigateHome = () =>{
        navigate('/');
    }

    return(
        <>
            <Card>
                <div className="card flex justify-content-center">
                    <InputText className="text-box" onChange={handleChange} name="disciplineName" id="disciplineName" type="disciplineName" Keyfilter="discipline-name" placeholder="Nome Disciplina"/>
                </div>
                <div className="card flex justify-content-center">
                    <InputText className="text-box"  onChange={handleChange} name="disciplineCode" id="disciplineCode" type="disciplineCode" Keyfilter="discipline-code" placeholder="Código disciplina"/>
                </div>
                <div className="card flex justify-content-center">
                    <Button className="button-box" onClick={navigateHome} label="Cancelar"/>
                    <Button className="button-box" onClick={disciplineExists} label="Salvar"/>
                </div>
                <ErrorPopup
                    message={popupMessage}
                    visible={popupVisible}
                    onClose={() => setPopupVisible(false)}
                />
            </Card>
        </>
    );
}

export default DisciplineCreate;