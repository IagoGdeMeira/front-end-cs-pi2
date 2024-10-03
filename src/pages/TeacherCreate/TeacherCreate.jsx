import './TeacherCreate.css';

import { Button } from 'primereact/button';
import React, { useEffect, useState } from "react";
import SimpleLayout from '../../components/layouts/simpleLayout/SimpleLayout';
import { ToggleButton } from 'primereact/togglebutton';
import { useNavigate } from "react-router-dom";

import { areRequiredFieldsFilled } from "../TeacherCreate/validators/teacherValidators";

import TeacherForm from './forms/TeacherForm'; 
import TeacherOptionalForm from './forms/TeacherOptionalForm'; 
import AddressForm from './forms/AddressForm';
import DegreeForm from './forms/DegreeForm';
import FunctionalRegistrationForm from './forms/FunctionalRegistrationForm';
import SpecializationForm from './forms/SpecializationForm';


const TeacherCreate = () => {
    const navigate = useNavigate();
    const navigateHome = () => navigate('/');

    const [showOptionalFields, setShowOptionalFields] = useState(false);
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

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

    const [degrees, setDegrees] = useState([]);
    const [specializations, setSpecializations] = useState([]);
    const [functionalRegistrations, setFunctionalRegistrations] = useState([]);

    useEffect(() => {
        const allFieldsFilled = areRequiredFieldsFilled(teacher);
        setSaveButtonDisabled(!allFieldsFilled);
    }, [teacher]);

    return (
        <SimpleLayout>
            <form className="flex flex-column">
                <TeacherForm teacher={teacher} setTeacher={setTeacher} />
                
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

                    <section className={`optionalFields border-2 border-top-none border-yellow-200 ${showOptionalFields ? "flex flex-column form-row" : "hidden"}`}>
                        <TeacherOptionalForm teacher={teacher} setTeacher={setTeacher} />
                        <AddressForm teacherAddress={address} setTeacherAddress={setAddress} />
                        <DegreeForm degrees={degrees} setDegrees={setDegrees} />
                        <SpecializationForm specializations={specializations} setSpecializations={setSpecializations} />
                        <FunctionalRegistrationForm functionalRegistrations={functionalRegistrations} setFunctionalRegistrations={setFunctionalRegistrations} />
                    </section>
                </section>

                <div className="form-buttons flex justify-content-center">
                    <Button className="w-8rem h-3rem bg-red-500 border-red-500" label="Cancelar" onClick={navigateHome} />
                    <Button className="w-8rem h-3rem bg-yellow-400 border-yellow-400" disabled={saveButtonDisabled} label="Salvar" />
                </div>
            </form>
        </SimpleLayout>
    );
}

export default TeacherCreate;