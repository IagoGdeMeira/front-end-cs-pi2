import { Button } from 'primereact/button';
import FunctionalRegistration from '../../../components/pages/teacherCreate/FunctionalRegistration/FunctionalRegistration';
import React from "react";

import {
    handleAddFunctionalRegistration,
    handleRemoveFunctionalRegistration,
    handleFunctionalRegistrationChange
} from "../handlers/formHandlers/functionalRegistrationFormHandlers";


const FunctionalRegistrationForm = ({ functionalRegistrations, setFunctionalRegistrations }) => {
    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Registros Funcionais</h2>

            {functionalRegistrations.map((functionalRegistration, index) => (
                <FunctionalRegistration
                key={index}
                functionalRegistration={functionalRegistration}
                handleFunctionalRegistrationChange={(e) => handleFunctionalRegistrationChange(e, index, functionalRegistrations, setFunctionalRegistrations)}
                handleRemoveFunctionalRegistration={() => handleRemoveFunctionalRegistration(index, functionalRegistrations, setFunctionalRegistrations)}
                index={index}
            />
            ))}

            <Button
                className="bg-yellow-500 border-yellow-500 w-full"
                icon="pi pi-plus"
                label=""
                onClick={() => handleAddFunctionalRegistration(functionalRegistrations, setFunctionalRegistrations)}
                type="button"
            />
        </section>
    );
};

export default FunctionalRegistrationForm;