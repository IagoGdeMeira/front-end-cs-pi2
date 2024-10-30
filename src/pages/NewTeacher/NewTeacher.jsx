import "./NewTeacher.css";

import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import { ToggleButton } from 'primereact/togglebutton';
import { useNavigate } from 'react-router-dom';

import AddressForm from './forms/AddressForm';
import DegreeForm from './forms/DegreeForm';
import FunctionalRegistrationForm from './forms/FunctionalRegistrationForm';
import SimpleLayout from '../../components/layouts/SimpleLayout/SimpleLayout';
import SpecializationForm from './forms/SpecializationForm';
import TeacherForm from './forms/TeacherForm'; 
import TeacherOptionalForm from './forms/TeacherOptionalForm';

import { areRequiredFieldsFilled } from "../../utils/validators/globalValidators";
import GlobalVisualConfig from "../../utils/configs/GlobalVisualConfig";
import PathRoutes from "../../utils/PathRoutes";
import { validateEmail, validatePhoneNumber, validateRG } from './js/validators';


const NewTeacher = () => {
    const navigate = useNavigate();

    const [showOptionalFields, setShowOptionalFields] = useState(false);
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

    const [teacher, setTeacher] = useState({});
    const [errors, setErrors] = useState({});

    const [address, setAddress] = useState({});
    const [degrees, setDegrees] = useState([]);
    const [specializations, setSpecializations] = useState([]);
    const [functionalRegistrations, setFunctionalRegistrations] = useState([]);

    useEffect(() => {
        const requiredFields = [
            'teacherName',
            'teacherCPF',
            'teacherRG',
            'teacherPhoneNumber',
            'teacherEmail'
        ];

        const allFieldsFilled = areRequiredFieldsFilled(teacher, requiredFields);
        setSaveButtonDisabled(!allFieldsFilled);
    }, [teacher]);

    const handleTeacherValidation = () => {
        const newErrors = {};
    
        if (!teacher.teacherName)
            newErrors.teacherName = "Nome informado é inválido.";
        if (!teacher.teacherCPF)
            newErrors.teacherCPF = "CPF informado é inválido.";
        if (!teacher.teacherRG || !validateRG(teacher.teacherRG))
            newErrors.teacherRG = "RG informado é inválido.";
        if (!teacher.teacherPhoneNumber || !validatePhoneNumber(teacher.teacherPhoneNumber))
            newErrors.teacherPhoneNumber = "Telefone informado é inválido.";
        if (!teacher.teacherEmail || !validateEmail(teacher.teacherEmail))
            newErrors.teacherEmail = "E-mail informado é inválido.";
    
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
            <form className={GlobalVisualConfig.FORM}>
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
                        className={GlobalVisualConfig.CANCEL_BUTTON + "w-9rem"}
                        label="Cancelar"
                        onClick={() => navigate(PathRoutes.HOME)}
                    />
                    <Button
                        className={GlobalVisualConfig.SAVE_BUTTON + "w-9rem"}
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