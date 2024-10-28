import { Button } from 'primereact/button';
import React from "react";

import FunctionalRegistration from '../../../components/pages/NewTeacher/FunctionalRegistration/FunctionalRegistration';

import { handleAddObject, handleFieldChange, handleRemoveObject} from "../../../utils/handlers/globalHandlers";


const FunctionalRegistrationForm = ({ functionalRegistrations, setFunctionalRegistrations }) => {
    const handleChange = (e, id) => handleFieldChange(e, id, functionalRegistrations, setFunctionalRegistrations);
    const handleRemove = (id) => handleRemoveObject(id, functionalRegistrations, setFunctionalRegistrations);
    const handleAdd = () => handleAddObject(functionalRegistrations, setFunctionalRegistrations, {
        functionalRegistrationDiscipline: "",
        functionalLine: "",
        functionalRegistrationLink: "",
        uploadedFiles: []
    });

    return (
        <section className="border-top-3 border-600 flex flex-column gap-3">
            <h2 className="text-gray-600">Registros Funcionais</h2>
            {functionalRegistrations.map((functionalRegistration) => (
                <FunctionalRegistration
                    functionalRegistration={functionalRegistration}
                    key={functionalRegistration.id}
                    handleFunctionalRegistrationChange={(e) => handleChange(e, functionalRegistration.id)}
                    handleRemoveFunctionalRegistration={() => handleRemove(functionalRegistration.id)}
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