import { Button } from 'primereact/button';
import React from "react";

import FunctionalRegistration from '../../../components/pages/teacherCreate/FunctionalRegistration/FunctionalRegistration';

import {
    handleAddObject,
    handleFieldChange,
    handleRemoveObject
} from "../../../utils/handlers/handlerUtil";


const FunctionalRegistrationForm = ({ functionalRegistrations, setFunctionalRegistrations }) => {
    const functionalRegistrationTemplate = {
        functionalRegistrationDiscipline: "",
        functionalLine: "",
        functionalRegistrationLink: ""
    };

    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Registros Funcionais</h2>

            {functionalRegistrations.map((functionalRegistration, index) => (
                <FunctionalRegistration
                key={index}
                functionalRegistration={functionalRegistration}
                handleFunctionalRegistrationChange={(e) => handleFieldChange(e, index, functionalRegistrations, setFunctionalRegistrations)}
                handleRemoveFunctionalRegistration={() => handleRemoveObject(index, functionalRegistrations, setFunctionalRegistrations)}
                index={index}
            />
            ))}

            <Button
                className="bg-yellow-500 border-yellow-500 w-full"
                icon="pi pi-plus"
                label=""
                onClick={() => handleAddObject(functionalRegistrations, setFunctionalRegistrations, functionalRegistrationTemplate)}
                type="button"
            />
        </section>
    );
};

export default FunctionalRegistrationForm;