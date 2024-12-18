import "./NewTeacher.css";

import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import { ToggleButton } from 'primereact/togglebutton';
import { useLocation, useNavigate } from 'react-router-dom';

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
import EmployeeService from "../../services/EmployeeService";


const NewTeacher = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const employeeService = new EmployeeService();

    const [showOptionalFields, setShowOptionalFields] = useState(false);
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

    const [teacher, setTeacher] = useState({});
    const [errors, setErrors] = useState({});

    const [address, setAddress] = useState({});
    const [degrees, setDegrees] = useState([]);
    const [data, setData] = useState({})
    const [specializations, setSpecializations] = useState([]);
    const [functionalRegistrations, setFunctionalRegistrations] = useState([]);

    const formatDate = (date) => {
        if (!date) return null; // Se a data for inválida, retorna null.
        const [year, month, day] = date.split('T')[0].split('-');
        const parts = date.split('-'); // Assumindo o formato 'YYYY-MM-DD'.
        return new Date(parts[0], parts[1] - 1, parts[2]); // `month - 1` porque o Date usa meses baseados em 0.
    };

    useEffect(() => {
        if (location.state?.teacher) {
            console.log('DATA: ', location.state.teacher);
            setTeacher((prevTeacher) => ({
                ...prevTeacher,
                id: location.state.teacher.id,
                teacherName: location.state.teacher.name,
                teacherBirthDate: new Date(location.state.teacher.birthDate),
                teacherEmail: location.state.teacher.email,
                teacherCPF: location.state.teacher.cpf,
                teacherPhoneNumber: location.state.teacher.telephone,
                teacherRG: location.state.teacher.rg,
                teacherBirthCity: location.state.teacher.birthCity,
                teacherBirthState: location.state.teacher.birthState,
                teacherWorkedHours: location.state.teacher.workload,
            }));

            setAddress((prevAdress) => ({
                ...prevAdress,
                id: location.state.teacher.address.id,
                addressCEP: location.state.teacher.address.cep,
                addressNumber: location.state.teacher.address.number,
                addressStreet: location.state.teacher.address.street,
                addressNeighborhood: location.state.teacher.address.neighborhood,
                addressCity: location.state.teacher.address.municipality,
            }));

            setSpecializations(location.state.teacher.graduations?.map((specialization) => ({
                id: specialization.id,
                specializationCourseName: specialization.name,
                specializationType: specialization.type,
                specializationConclusionDate: new Date(specialization.conclusionDate),
                specializationCourseLocation: specialization.location,
            })) || []);

            setFunctionalRegistrations(location.state.teacher.functionalLines?.map((registration) => ({
                id: registration.id,
                functionalLine: registration.lineNumber,
                functionalRegistrationLink: registration.tie,
                functionalRegistrationDiscipline: registration.subject,
            })) || []);
        }
    }, [location.state]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleTeacherValidation()) {
            const formattedGraduations = specializations.map((specialization) => ({
                id: specialization.id || null,
                name: specialization.specializationCourseName,
                location: specialization.specializationCourseLocation,
                conclusionDate: specialization.specializationConclusionDate.toISOString(),
                type: specialization.specializationType,
            }));

            const formattedFunctionalLines = functionalRegistrations.map((registration) => ({
                id: registration.id || null,
                lineNumber: registration.functionalLine,
                tie: registration.functionalRegistrationLink,
                subject: registration.functionalRegistrationDiscipline,
            }));

            setData((prevData) => ({
                ...prevData,
                id: teacher.id ? teacher.id : null,
                name: teacher.teacherName,
                cpf: teacher.teacherCPF,
                rg: teacher.teacherRG,
                birthDate: teacher.teacherBirthDate,
                email: teacher.teacherEmail,
                telephone: teacher.teacherPhoneNumber,
                birthCity: teacher.teacherBirthCity,
                birthState: teacher.teacherBirthState,
                workload: teacher.teacherWorkedHours,
                address: {
                    id: address.id ? address.id : null,
                    number: address.addressNumber,
                    neighborhood: address.addressNeighborhood,
                    cep: address.addressCEP,
                    municipality: address.addressCity,
                    street: address.addressStreet,
                },
                graduations: formattedGraduations,
                functionalLines: formattedFunctionalLines,
            }));

            try {
              if (teacher.id != NULL) {
                await employeeService.update(data);
              } else {
                await employeeService.insert(data);
              }
              
              navigate(PathRoutes.TEACHER_LIST);
            } catch (err) {
              console.log(err);
              handleServerError(err);
            }
          
            console.log("Data submitted:", data);
        }
    };

    return (
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
                    {/* <DegreeForm degrees={degrees} setDegrees={setDegrees} /> */}
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
    );
}

export default NewTeacher;