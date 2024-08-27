import React from "react";
import "./DisciplineCreate.css";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const DiscipçineCreate = () =>{
    const [discipline, setDiscipline] = useState({disciplineName: "", disciplineCode: ""}) 
    const [value, setValue] = useState('')
    const navigate = useNavigate();
    

    const handChange = (input) => {
        setDiscipline({ ...discipline, [input.target.name]: input.target.value });
    }

    const salvar = () =>{
        localStorage.setItem("disciplineName", discipline.disciplineName);
        localStorage.setItem("DisciplineCode", discipline.disciplineCode);
    }

    const disciplinaExiste = () =>{
        if (localStorage.getItem("disciplineName") == discipline.disciplineName || localStorage.getItem("disciplineCode" == discipline.disciplineCode)){
            alert("Nome ou codigo da disciplina já existe")
        }else{
            salvar();
        }
    }

    return(
        <>
            <Card title="Simple Card">
                <div className="card flex justify-content-center">
                    <InputText onChange={handChange} name="disciplineName" id="disciplineName" type="disciplineName" Keyfilter="discipline-name" placeholder="Nome Disciplina"/>
                </div>
                <div className="card flex justify-content-center">
                    <InputText onChange={handChange} name="disciplineCode" id="disciplineCode" type="disciplineCode" Keyfilter="discipline-code" placeholder="Codigo disciplina"/>
                </div>
                <div className="card flex justify-content-center">
                    <Button onClick={disciplinaExiste} label="Salvar"/>
                </div>
            </Card>
        </>
    );
}

export default DiscipçineCreate;