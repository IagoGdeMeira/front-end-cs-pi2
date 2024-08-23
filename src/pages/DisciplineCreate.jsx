import React from "react";
import "./DisciplineCreate.css";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const DiscipçineCreate = () =>{
    return(
        <>
            <Card title="Simple Card">
                <div className="card flex justify-content-center">
                    <InputText Keyfilter="discipline-name" placeholder="Nome Disciplina"/>
                    <InputText Keyfilter="discipline-code" placeholder="Codigo disciplina"/>
                    <Button label="Salvar"/>
                </div>
            </Card>
        </>
    );
}

export default DiscipçineCreate;