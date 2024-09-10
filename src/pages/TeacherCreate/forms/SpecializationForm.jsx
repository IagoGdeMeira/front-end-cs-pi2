import { Button } from 'primereact/button';
import React from "react";
import Specialization from "../../../components/Specialization/Specialization";

import {
    handleAddSpecialization,
    handleRemoveSpecialization,
    handleSpecializationChange
} from "../handlers/formHandlers/specializationFormHandlers";


const SpecializationForm = ({ specializations, setSpecializations }) => {
    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Especializações do Professor</h2>

            {specializations.map((specialization, index) => (
                <Specialization
                    key={index}
                    specialization={specialization}
                    handleSpecializationChange={(e) => handleSpecializationChange(e, index, specializations, setSpecializations)}
                    handleRemoveSpecialization={() => handleRemoveSpecialization(index, specializations, setSpecializations)}
                    index={index}
                />
            ))}

            <Button
                className="bg-yellow-500 border-yellow-500 w-full"
                icon="pi pi-plus"
                label=""
                onClick={() => handleAddSpecialization(specializations, setSpecializations)}
                type="button"
            />
        </section>
    );
};

export default SpecializationForm;