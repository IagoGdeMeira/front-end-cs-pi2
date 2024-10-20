import { Button } from 'primereact/button';
import React from "react";

import FunctionalRegistration from '../../../components/pages/teacherCreate/FunctionalRegistration/FunctionalRegistration';

import {
    handleAddObject,
    handleFieldChange,
    handleRemoveObject
} from "../../../utils/handlers/handlerUtil";


const FunctionalRegistrationForm = ({ functionalRegistrations, setFunctionalRegistrations }) => {
    const handleAdd = () => {
        const newFunctionalRegistration = {
            functionalRegistrationDiscipline: "",
            functionalLine: "",
            functionalRegistrationLink: ""
        };

        handleAddObject(functionalRegistrations, setFunctionalRegistrations, newFunctionalRegistration);
    }

    const handleChange = (e, index) => handleFieldChange(e, index, functionalRegistrations, setFunctionalRegistrations);
    const handleRemove = (index) => handleRemoveObject(index, functionalRegistrations, setFunctionalRegistrations);

    return (
        <section className="border-top-3 border-600 flex flex-column gap-3">
            <h2 className="text-gray-600">Registros Funcionais</h2>

            {functionalRegistrations.map((functionalRegistration, index) => (
                <FunctionalRegistration
                    key={index}
                    functionalRegistration={functionalRegistration}
                    handleFunctionalRegistrationChange={(e) => handleChange(e, index)}
                    handleRemoveFunctionalRegistration={() => handleRemove(index)}
                    index={index}
                />
            ))}

            <Button
                className="bg-yellow-500 border-yellow-500 w-full"
                icon="pi pi-plus"
                label=""
                onClick={handleAdd}
                type="button"
            />
        </section>
    );
};

export default FunctionalRegistrationForm;