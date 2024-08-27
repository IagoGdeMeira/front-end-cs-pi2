import './CreateTeacher.css';

import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import SimpleLayout from '../../components/simpleLayout/SimpleLayout';


function CreateTeacher() {
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');

    return (
        <SimpleLayout>
            <form className="label-gap card flex justify-content-center">
                <FloatLabel>
                    <InputText
                        id="name"
                        onChange={(e) => setName(e.target.name)}
                        value={name}
                    />
                    <label for="name">Nome do professor</label>
                </FloatLabel>
                <FloatLabel>
                    <InputMask
                        mask="000.000.000-00"
                        onChange={(e) => setCPF(e.target.cpf)}
                        placeholder="000.000.000-00"
                        value={cpf}    
                    />
                    <label for="cpf">CPF do professor</label>
                </FloatLabel>
            </form>
        </SimpleLayout>
    );
}

export default CreateTeacher;