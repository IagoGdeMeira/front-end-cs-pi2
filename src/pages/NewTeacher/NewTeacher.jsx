import "./NewTeacher.css";

import { Button } from 'primereact/button';
import React, { useState, useEffect } from 'react';
import SimpleLayout from '../../components/layouts/simpleLayout/SimpleLayout';
import { ToggleButton } from 'primereact/togglebutton';
import { useNavigate } from 'react-router-dom';

import AddressForm from './forms/AddressForm';
import DegreeForm from './forms/DegreeForm';
import FunctionalRegistrationForm from './forms/FunctionalRegistrationForm';
import SpecializationForm from './forms/SpecializationForm';
import TeacherForm from './forms/TeacherForm'; 
import TeacherOptionalForm from './forms/TeacherOptionalForm';

import { areRequiredFieldsFilled, validateEmail, validateRG } from './js/validators';


const NewTeacher = () => {
    const navigate = useNavigate();
    const navigateHome = () => navigate('/');
    const cancelButtonConfig = "bg-red-400 border-red-400 hover:bg-red-600 hover:border-red-600 ";
    const saveButtonConfig = "bg-yellow-400 border-yellow-400 hover:bg-yellow-600 hover:border-yellow-600 ";

    const [showOptionalFields, setShowOptionalFields] = useState(false);
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

    const [teacher, setTeacher] = useState({});
    const [errors, setErrors] = useState({});

    const [address, setAddress] = useState({});
    const [degrees, setDegrees] = useState([]);
    const [specializations, setSpecializations] = useState([]);
    const [functionalRegistrations, setFunctionalRegistrations] = useState([]);

    useEffect(() => {
        const allFieldsFilled = areRequiredFieldsFilled(teacher);
        setSaveButtonDisabled(!allFieldsFilled);
    }, [teacher]);

    const handleTeacherValidation = () => {
        const newErrors = {};
    
        if (!teacher.teacherName || teacher.teacherName.trim() === '')
            newErrors.teacherName = "Nome é obrigatório.";
        if (!teacher.teacherCPF || teacher.teacherCPF.trim() === '')
            newErrors.teacherCPF = "CPF é obrigatório.";
        if (!teacher.teacherRG || teacher.teacherRG.trim() === '' || !validateRG(teacher.teacherRG))
            newErrors.teacherRG = "RG é obrigatório ou inválido.";
        if (!teacher.teacherPhoneNumber || teacher.teacherPhoneNumber.trim() === '')
            newErrors.teacherPhoneNumber = "Telefone é obrigatório.";
        if (!teacher.teacherEmail || !validateEmail(teacher.teacherEmail))
            newErrors.teacherEmail = "E-mail é obrigatório ou inválido.";
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleTeacherValidation()) {
            console.log("Form submitted:", teacher);
        }
    };

    return (
        <SimpleLayout>
            <form className="
                bg-bluegray-100
                border-noround
                grid
                md:px-4
                px-1
                py-3
                sm:border-round-lg
            ">
                <TeacherForm errors={errors} teacher={teacher} setTeacher={setTeacher} />
                <section className="col-12">
                    <ToggleButton
                        checked={showOptionalFields}
                        className="w-full"
                        id="showOptionalFields"
                        onChange={(e) => setShowOptionalFields(e.value)}
                        offIcon="pi pi-angle-down"
                        onIcon="pi pi-angle-up"
                        offLabel=""
                        onLabel=""
                    />
                    <section className={`bg-bluegray-200 ${showOptionalFields ? "col-12 flex flex-column gap-3" : "hidden"}`}>
                        <TeacherOptionalForm teacher={teacher} setTeacher={setTeacher} />
                        <AddressForm address={address} setAddress={setAddress} />
                        <DegreeForm degrees={degrees} setDegrees={setDegrees} />
                        <SpecializationForm specializations={specializations} setSpecializations={setSpecializations} />
                        <FunctionalRegistrationForm functionalRegistrations={functionalRegistrations} setFunctionalRegistrations={setFunctionalRegistrations} />
                    </section>
                </section>
                <div className="col flex gap-4 justify-content-center">
                    <Button
                        className={cancelButtonConfig + "w-9rem"}
                        label="Cancelar"
                        onClick={navigateHome}
                    />
                    <Button
                        className={saveButtonConfig + "w-9rem"}
                        disabled={saveButtonDisabled}
                        label="Salvar"
                        onClick={handleSubmit}
                    />
                </div> 
            </form>
        </SimpleLayout>
    );
}

export default NewTeacher;