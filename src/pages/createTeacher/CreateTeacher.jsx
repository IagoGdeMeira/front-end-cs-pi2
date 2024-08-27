import './CreateTeacher.css';

import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import SimpleLayout from '../../components/simpleLayout/SimpleLayout';


function CreateTeacher() {
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [rg, setRG] = useState('');

    return (
        <SimpleLayout>
            <form className="card flex justify-content-center">
                <div className="form-item">
                    <FloatLabel>
                        <InputText
                            className="input-width"
                            id="name"
                            onChange={(e) => setName(e.target.name)}
                            value={name}
                        />
                        <label for="name">Nome do professor</label>
                    </FloatLabel>
                </div>
                <div className="form-item">
                    <FloatLabel>
                        <InputMask
                            className="input-width"
                            mask="XXX.XXX.XXX-XX?"
                            onChange={(e) => setCPF(e.target.cpf)}
                            value={cpf}    
                        />
                        <label for="cpf">CPF do professor</label>
                    </FloatLabel>
                </div>
                <div className="form-item">
                    <FloatLabel>
                        <InputMask
                            className="input-width"
                            mask="XX.XXX.XXX-X?"
                            onChange={(e) => setRG(e.target.rg)}
                            value={rg}
                        />
                        <label for="rg">RG do professor</label>
                    </FloatLabel>
                </div>
            </form>
        </SimpleLayout>
    );
}

export default CreateTeacher;