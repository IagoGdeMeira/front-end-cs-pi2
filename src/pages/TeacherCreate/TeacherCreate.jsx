import './TeacherCreate.css';

import { Button } from 'primereact/button';
import DropdownCities from '../../components/dropdowns/DropdownCities/DropdownCities';
import DropdownStates from '../../components/dropdowns/DropdownStates/DropdownStates';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import React, { useState } from "react";
import SimpleLayout from '../../components/layouts/simpleLayout/SimpleLayout';
import { useNavigate } from "react-router-dom";


const TeacherCreate = () => {
    const [teacher, setTeacher] = useState({
        teacherName: '',        
        teacherCPF: '',         
        teacherRG: '',          
        teacherEmail: '', 
        teacherPhoneNumber: '',
        teacherBirthDate: '',
        teacherBirthCity: '',   // PENDENTE
        teacherBirthState: '',  // PENDENTE
        teacherWorkedHours: ''  // PENDENTE 

        /* Preciso adicionar os campos das outras entidades. */
    });

    const [selectedState, setSelectedState] = useState(null);

    const handleNameChange = (e) => {
        setTeacher({ ...teacher, teacherName: e.target.value });
    };

    const handleBirthDateChange = (e) => {
        setTeacher({ ...teacher, teacherBirthDate: e.target.value });
    }

    const handleCPFChange = (e) => {
        setTeacher({ ...teacher, teacherCPF: e.value });
    };

    const handleRGChange = (e) => {
        setTeacher({ ...teacher, teacherRG: e.value });
    };

    const handlePhoneNumberChange = (e) => {
        setTeacher({ ...teacher, teacherPhoneNumber: e.target.value });
    };

    const handleEmailChange = (e) => {
        setTeacher({ ...teacher, teacherEmail: e.target.value });
    };

    const handleBirthCityChange = (value) => {
        setTeacher({ ...teacher, teacherBirthCity: value });
    };

    const handleBirthStateChange = (value) => {
        setSelectedState(value);
        setTeacher({ ...teacher, teacherStateCity: value });
    };

    const handleWorkedHoursChange = (e) => {
        const { value } = e.target;
        
        if(/^\d*$/.test(value))
            setTeacher({ ...teacher, teacherTeachingHours: value });
        else
            console.error("ERROR: Only integer numbers are allowed in this input.");
    };

    const validateRG = (rg) => {
        const rgRegex = /^[0-9]{1,2}(\.[0-9]{3}){2}-[0-9X]$|^[A-Za-z]{1,2}-[0-9]{2}(\.[0-9]{3}){2}-[0-9X]$|^[0-9]{1,9}[A-Za-z0-9]*$/;
        const rgNormalized = rg.replace(/[.\-_\s]/g, '');

        return rgRegex.test(rg) || /^[0-9]+$/.test(rgNormalized);
    };

    const navigate = useNavigate();
    const navigateHome = () =>{
        navigate('/');
    }

    return (
        <SimpleLayout>
            <form className="flex flex-column">
                <div className="form-row flex">
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
                        <small id="teacherName-help">Campo do nome do professor.</small>
                    </div>

                    {/* Campo para a DATA DE NASCIMENTO do professor. */}
                    <div className="form-item form-item-date flex flex-column align-items-start">
                        <label htmlFor="teacherBirthDate">Nascido em:</label>
                        <InputMask
                            aria-describedby="teacherBirthDate-help"
                            className="w-full"
                            id="teacherBirthDate"
                            mask="99/99/9999"
                            onChange={handleBirthDateChange}
                            value={teacher.teacherBirthDate}
                        />
                        <small id="teacherName-help">Campo de data de nascimento.</small>
                    </div>
                </div>
                <div className="form-row flex">
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
                        <small id="teacherCPF-help">Campo do CPF do professor.</small>
                    </div>

                    {/* Campo para o RG do professor. */}
                    <div className="form-item flex flex-column align-items-start">
                        <label htmlFor="teacherRG">RG do Professor:</label>
                        <InputText
                            aria-describedby="teacherRG-help"
                            className="w-full"
                            id="teacherRG"
                            onChange={handleRGChange}
                            value={teacher.teacherRG}
                        />
                        <small id="teacherRG-help">Campo do RG do professor.</small>
                    </div>
                </div>
                <div className="form-row flex">
                    {/* Campo para o TELEFONE do professor. */}
                    <div className="form-item flex flex-column align-items-start">
                        <label htmlFor="teacherPhoneNumber">Telefone do Professor:</label>
                        <InputMask
                            aria-describedby="teacherPhoneNumber-help"
                            className="w-full"
                            id="teacherPhoneNumber"
                            mask="(99) 9? 9999-9999"
                            onChange={handlePhoneNumberChange}
                            value={teacher.teacherPhoneNumber}
                        />
                        <small id="teacherPhoneNumber-help">Campo do número de contato do professor.</small>
                    </div>

                    {/* Campo para o E-MAIL do professor. */}
                    <div className="form-item flex flex-column align-items-start">
                        <label htmlFor="teacherEmail">E-mail do Professor:</label>
                        <InputText
                            aria-describedby="teacherEmail-help"
                            className="w-full"
                            id="teacherEmail"
                            onChange={handleEmailChange}
                            value={teacher.teacherEmail}
                        />
                        <small id="teacherEmail-help">Campo do e-mail do professor.</small>
                    </div>
                </div>
                <div className="form-row flex">
                    {/* Campo para o ESTADO NATAL do professor */}
                    <div className="form-item flex flex-column align-items-start">
                        <label htmlFor="teacherBirthState">Estado Natal:</label>
                        <DropdownStates
                            className="dropdown"
                            id="TeacherBirthState"
                            onChange={(e) => handleBirthStateChange(e.value)}
                        />
                        <small id="teacherBirthState-help">Campo do estado natal do professor.</small>
                    </div>

                    {/* Campo para a CIDADE NATAL do professor */}
                    <div className="form-item flex flex-column align-items-start">
                        
                        <label htmlFor="teacherBirthCity">Cidade Natal:</label>
                        <DropdownCities
                            className="dropdown"
                            id="TeacherBirthCity"
                            onChange={(e) => handleBirthCityChange(e.value)}
                            stateId={selectedState}
                        />
                        <small id="teacherBirthCity-help">Campo da cidade natal do professor.</small>
                    </div>
                </div>
                <div className="form-buttons flex justify-content-center">
                    <Button onClick={navigateHome} label="Cancelar"/>
                    <Button className="yellow-bt" label="Salvar"/>
                </div>
            </form>
        </SimpleLayout>
    );
}

export default TeacherCreate;