import './TeacherCreate.css';

import { Button } from 'primereact/button';
import DropdownCities from '../../components/dropdowns/DropdownCities/DropdownCities';
import DropdownStates from '../../components/dropdowns/DropdownStates/DropdownStates';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import React, { useState } from "react";
import SimpleLayout from '../../components/layouts/simpleLayout/SimpleLayout';
import { ToggleButton } from 'primereact/togglebutton';
import { useNavigate } from "react-router-dom";

import {
    handleNameChange,
    handleBirthDateChange,
    handleCPFChange,
    handleRGChange,
    handlePhoneNumberChange,
    handleEmailChange,
    handleBirthCityChange,
    handleBirthStateChange,
    handleWorkedHoursChange
} from "../TeacherCreate/handlers/teacherHandlers";

import AddressForm from './forms/AddressForm';
import DegreeForm from './forms/DegreeForm';
import SpecializationForm from './forms/SpecializationForm';


const TeacherCreate = () => {
    const navigate = useNavigate();
    const navigateHome = () => navigate('/');

    const [selectedState, setSelectedState] = useState(null);
    const [showOptionalFields, setShowOptionalFields] = useState(false);
    
    const [teacher, setTeacher] = useState({
        teacherName: '',        
        teacherCPF: '',         
        teacherRG: '',          
        teacherEmail: '', 
        teacherPhoneNumber: '',
        teacherBirthDate: '',
        teacherBirthCity: '',
        teacherBirthState: '',
        teacherWorkedHours: ''
    });

    const [address, setAddress] = useState({
        addressStreet: '',
        addressNumber: '',
        addressNeighborhood: '',
        addressCEP: '',
        addressCity: ''
    });

    return (
        <SimpleLayout>
            <form className="flex flex-column">
                <div className="form-row flex">
                    {/* Campo para o NOME do professor. */}
                    <div className="form-item flex flex-column align-items-start">
                        <label htmlFor="teacherName">Nome do Professor:</label>
                        <InputText
                            aria-describedby="teacherName-help"
                            className="w-full text-overflow-ellipsis"
                            id="teacherName"
                            onChange={(e) => handleNameChange(e, teacher, setTeacher)}
                            value={teacher.teacherName}
                        />
                        <small id="teacherName-help">Campo do nome do professor.</small>
                    </div>

                    {/* Campo para a DATA DE NASCIMENTO do professor. */}
                    <div className="w-9rem form-item-date flex flex-column align-items-start">
                        <label htmlFor="teacherBirthDate">Nascido em:</label>
                        <InputMask
                            aria-describedby="teacherBirthDate-help"
                            className="w-full text-overflow-ellipsis"
                            id="teacherBirthDate"
                            mask="99/99/9999"
                            onChange={(e) => handleBirthDateChange(e, teacher, setTeacher)}
                            value={teacher.teacherBirthDate}
                        />
                        <small id="teacherName-help">Data de nascimento.</small>
                    </div>
                </div>
                <div className="form-row flex">
                    {/* Campo para o CPF do professor. */}
                    <div className="form-item flex flex-column align-items-start">
                        <label htmlFor="teacherCPF">CPF do Professor:</label>
                        <InputMask
                            aria-describedby="teacherCPF-help"
                            className="w-full text-overflow-ellipsis"
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
                            className="w-full text-overflow-ellipsis"
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
                            className="w-full text-overflow-ellipsis"
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
                            className="w-full text-overflow-ellipsis"
                            id="teacherEmail"
                            onChange={(e) => handleEmailChange(e, teacher, setTeacher)}
                            value={teacher.teacherEmail}
                        />
                        <small id="teacherEmail-help">Campo do e-mail do professor.</small>
                    </div>
                </div>

                <section>
                    <ToggleButton
                        checked={showOptionalFields}
                        className= "align-items-center w-full"
                        id="showOptionalFields"
                        onChange={(e) => setShowOptionalFields(e.value)}

                        offIcon="pi pi-angle-down"
                        onIcon="pi pi-angle-up"
                        offLabel=""
                        onLabel=""
                    />

                    { showOptionalFields && (
                        <section className="optionalFields border-2 border-top-none border-yellow-200 flex flex-column form-row">
                            <div className="form-row flex">
                                {/* Campo para o ESTADO NATAL do professor */}
                                <div className="form-item flex flex-column align-items-start">
                                    <label htmlFor="teacherBirthState">Estado Natal:</label>
                                    <DropdownStates
                                        className="w-full text-left white-space-nowrap overflow-hidden text-overflow-clip"
                                        id="TeacherBirthState"
                                        onChange={(e) => {
                                            setSelectedState(e.value);
                                            handleBirthStateChange(e.value, teacher, setTeacher);
                                        }}
                                        value={teacher.teacherBirthState}
                                    />
                                    <small id="teacherBirthState-help">Campo do estado natal do professor.</small>
                                </div>

                                {/* Campo para a CIDADE NATAL do professor */}
                                <div className="form-item flex flex-column align-items-start">
                                    <label htmlFor="teacherBirthCity">Cidade Natal:</label>
                                    <DropdownCities
                                        className="w-full text-left white-space-nowrap overflow-hidden text-overflow-clip"
                                        id="TeacherBirthCity"
                                        onChange={(e) => handleBirthCityChange(e.value, teacher, setTeacher)}
                                        stateId={selectedState}
                                        value={teacher.teacherBirthCity}
                                    />
                                    <small id="teacherBirthCity-help">Campo da cidade natal do professor.</small>
                                </div>

                                {/* Campo para as HORAS TRABALHADAS do professor */}
                                <div className="form-item-integer-input w-5rem flex flex-column align-items-start">
                                    <label htmlFor="teacherWorkedHours">Horas:</label>
                                    <InputText
                                        aria-describedby="teacherWorkedHours-help"
                                        className="w-full text-overflow-ellipsis"
                                        id="teacherWorkedHours"
                                        onChange={(e) => handleWorkedHoursChange(e, teacher, setTeacher)}
                                        value={teacher.teacherWorkedHours}
                                    />
                                    <small id="teacherWorkedHours-help">Horas/Aula</small>
                                </div>
                            </div>   
                            <AddressForm teacherAddress={address} setTeacherAddress={setAddress}/>
                            <DegreeForm/>
                            <SpecializationForm/>
                        </section>
                    )}
                </section>

                <div className="form-buttons flex justify-content-center">
                    <Button
                        className="bg-red-500 border-red-500"
                        label="Cancelar"
                        onClick={navigateHome}
                    />
                    <Button
                        label="Salvar"
                        className="bg-yellow-400 border-yellow-400"
                    />
                </div>
            </form>
        </SimpleLayout>
    );
}

export default TeacherCreate;