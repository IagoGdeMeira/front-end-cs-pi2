import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleLayout from '../../components/layouts/simpleLayout/SimpleLayout';
 
import AddressForm from './forms/AddressForm';
import DegreeForm from './forms/DegreeForm';
import FunctionalRegistrationForm from './forms/FunctionalRegistrationForm';
import SpecializationForm from './forms/SpecializationForm';
import TeacherForm from './forms/TeacherForm'; 
import TeacherOptionalForm from './forms/TeacherOptionalForm';
import { areRequiredFieldsFilled } from '../TeacherCreate/validators/teacherValidators';


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
            <form className="
                bg-bluegray-100
                border-round-lg
            ">
                <TeacherForm teacher={teacher} setTeacher={setTeacher} />
                
                <section className="p-field">
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

                    <section className={`${showOptionalFields ? "flex flex-column form-row" : "hidden"}`}>
                        <TeacherOptionalForm teacher={teacher} setTeacher={setTeacher} />
                        <AddressForm teacherAddress={address} setTeacherAddress={setAddress} />
                        <DegreeForm degrees={degrees} setDegrees={setDegrees} />
                        <SpecializationForm specializations={specializations} setSpecializations={setSpecializations} />
                        <FunctionalRegistrationForm functionalRegistrations={functionalRegistrations} setFunctionalRegistrations={setFunctionalRegistrations} />
                    </section>
                </section>

                <div className="p-d-flex p-jc-center">
                    <Button className="p-button-danger p-mr-2" label="Cancelar" onClick={navigateHome} />
                    <Button className="p-button-warning" label="Salvar" disabled={saveButtonDisabled} />
                </div>
            </form>
        </SimpleLayout>
    );
}

export default TeacherCreate;
