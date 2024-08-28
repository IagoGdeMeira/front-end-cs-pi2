import './CreateTeacher.css';

import DropdownStates from '../../components/dropdowns/dropdownStates/DropdownStates';
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import SimpleLayout from '../../components/layouts/simpleLayout/SimpleLayout';


function CreateTeacher() {
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [rg, setRG] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

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
                            id="cpf"
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
                            id="rg"
                            mask="XX.XXX.XXX-X?"
                            onChange={(e) => setRG(e.target.rg)}
                            value={rg}
                        />
                        <label for="rg">RG do professor</label>
                    </FloatLabel>
                </div>
                <div className="form-item">
                    <FloatLabel>
                        <InputMask
                            className="input-width"
                            id="dataNascimento"
                            mask="XX/XX/XXXX"
                            onChange={(e) => setDataNascimento(e.target.dataNascimento)}
                            value={dataNascimento}
                        />
                        <label for="dataNascimento">Data de nascimento do professor</label>
                    </FloatLabel>
                </div>
                <div className="form-item">
                    <div className="birth-item">
                        <FloatLabel>
                            <DropdownStates
                                id="birthState"
                            />
                            <label for="birthState">Estado do professor</label>
                        </FloatLabel>
                    </div>
                </div>
            </form>
        </SimpleLayout>
    );
}

export default CreateTeacher;