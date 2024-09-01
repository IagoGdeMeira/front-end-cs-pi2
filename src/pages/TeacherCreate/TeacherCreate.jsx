import './TeacherCreate.css';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import React, { useState } from "react";
import SimpleLayout from '../../components/layouts/simpleLayout/SimpleLayout';
import { useNavigate } from "react-router-dom";


const TeacherCreate = () => {
    const [teacher, setTeacher] = useState({
        teacherName: '',        
        teacherCPF: '',         
        teacherRG: '',          
        teacherEmail: '',       // PENDENTE
        teacherPhoneNumber: '', // PENDENTE
        teacherBirthDate: '',   // PENDENTE
        teacherBirthCity: '',   // PENDENTE
        teacherBirthState: '',  // PENDENTE
        teacherWorkedHours: ''  // PENDENTE 

        /* Preciso adicionar os campos das outras entidades. */
    });

    const handleNameChange = (e) => {
        setTeacher({ ...teacher, teacherName: e.target.value });
    };

    const handleCPFChange = (e) => {
        setTeacher({ ...teacher, teacherCPF: e.value });
    };

    const handleRGChange = (e) => {
        setTeacher({ ...teacher, teacherRG: e.value });
    };

    const handleEmailChange = (e) => {
        setTeacher({ ...teacher, teacherEmail: e.value });
    };

    const handleWorkedHoursChange = (e) => {
        const { value } = e.target;
        
        if (/^\d*$/.test(value))
            setTeacher({ ...teacher, teacherTeachingHours: value });
        else
            throw new Error("ERROR: Only integer numbers are allowed in this input.");
    };

    const navigate = useNavigate();

    const navigateHome = () =>{
        navigate('/');
    }

    return (
        <SimpleLayout>
            <form className="flex flex-column">
                <div className="form-row">
                    {/* Campo para o NOME do professor. */}
                    <div className="form-item flex flex-column align-items-start">
                        <label htmlFor="teacherName">Nome do Professor:</label>
                        <InputText
                            aria-describedby="teacherName-help"
                            className="w-full"
                            id="teacherName"
                            onChange={handleNameChange}
                            value={teacher.teacherName}
                        />
                        <small id="teacherName-help">Informe neste campo o nome do professor.</small>
                    </div>
                </div>
                <div className="form-row flex justify-content-between">
                    {/* Campo para o CPF do professor. */}
                    <div className="form-item flex flex-column align-items-start">
                        <label htmlFor="teacherCPF">CPF do Professor:</label>
                        <InputMask
                            aria-describedby="teacherCPF-help"
                            className="w-full"
                            id="teacherCPF"
                            mask="999.999.999-99"
                            onChange={handleCPFChange}
                            value={teacher.teacherCPF}
                        />
                        <small id="teacherCPF-help">Informe neste campo o CPF do professor.</small>
                    </div>

                    {/* Campo para o RG do professor. */}
                    <div className="form-item flex flex-column align-items-start">
                        <label htmlFor="teacherRG">RG do Professor:</label>
                        <InputMask
                            aria-describedby="teacherRG-help"
                            className="w-full"
                            id="teacherRG"
                            mask="99.999.999-9"
                            onChange={handleRGChange}
                            value={teacher.teacherRG}
                        />
                        <small id="teacherRG-help">Informe neste campo o RG do professor.</small>
                    </div>
                </div>
                <div className="form-buttons flex justify-content-center">
                    <Button className="" onClick={navigateHome} label="Cancelar"/>
                    <Button className="" label="Salvar"/>
                </div>
            </form>
        </SimpleLayout>
    );
}

export default TeacherCreate;