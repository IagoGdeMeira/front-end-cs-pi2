import './TeacherCreate.css';

import { Button } from 'primereact/button';
import DropdownCities from '../../components/dropdowns/DropdownCities/DropdownCities';
import DropdownStates from '../../components/dropdowns/DropdownStates/DropdownStates';
import {
    handleNameChange,
    handleBirthDateChange,
    handleCPFChange,
    handleRGChange,
    handlePhoneNumberChange,
    handleEmailChange,
    handleBirthCityChange,
    handleBirthStateChange
} from "../TeacherCreate/handlers/teacherHandlers";
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import React, { useState } from "react";
import SimpleLayout from '../../components/layouts/simpleLayout/SimpleLayout';
import { useNavigate } from "react-router-dom";

const TeacherCreate = () => {
    const navigate = useNavigate();
    
    const [teacher, setTeacher] = useState({
        teacherName: '',        
        teacherCPF: '',         
        teacherRG: '',          
        teacherEmail: '', 
        teacherPhoneNumber: '',
        teacherBirthDate: '',
        teacherBirthCity: '',
        teacherBirthState: '',
        teacherWorkedHours: ''  // PENDENTE 

        /* Preciso adicionar os campos das outras entidades. */
    });

    const [selectedState, setSelectedState] = useState(null);

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
                            onChange={(e) => handleNameChange(e, teacher, setTeacher)}
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
                            onChange={(e) => handleBirthDateChange(e, teacher, setTeacher)}
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
                            onChange={(e) => handleCPFChange(e, teacher, setTeacher)}
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
                            onChange={(e) => handleRGChange(e, teacher, setTeacher)}
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
                            onChange={(e) => handlePhoneNumberChange(e, teacher, setTeacher)}
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
                            onChange={(e) => handleEmailChange(e, teacher, setTeacher)}
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
                            onChange={(e) => {
                                setSelectedState(e.value);
                                handleBirthStateChange(e.value, teacher, setTeacher);
                            }}
                        />
                        <small id="teacherBirthState-help">Campo do estado natal do professor.</small>
                    </div>

                    {/* Campo para a CIDADE NATAL do professor */}
                    <div className="form-item flex flex-column align-items-start">
                        
                        <label htmlFor="teacherBirthCity">Cidade Natal:</label>
                        <DropdownCities
                            className="dropdown"
                            id="TeacherBirthCity"
                            onChange={(e) => handleBirthCityChange(e.value, teacher, setTeacher)}
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