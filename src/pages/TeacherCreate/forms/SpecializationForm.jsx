import { Button } from 'primereact/button';
import React from "react";

import Specialization from "../../../components/pages/teacherCreate/Specialization/Specialization";

import {
    handleAddObject,
    handleFieldChange,
    handleRemoveObject
} from "../../../utils/handlers/handlerUtil";


const SpecializationForm = ({ specializations, setSpecializations }) => {
    const specializationTemplate = {
        specializationCourseName: "",
        specializationCourseLocation: "",
        specializationConclusionDate: ""
    };

    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Especializações do Professor</h2>

            {specializations.map((specialization, index) => (
                <Specialization
                    key={index}
                    specialization={specialization}
                    handleSpecializationChange={(e) => handleFieldChange(e, index, specializations, setSpecializations)}
                    handleRemoveSpecialization={() => handleRemoveObject(index, specializations, setSpecializations)}
                    index={index}
                />
            ))}

            <Button
                className="bg-yellow-500 border-yellow-500 w-full"
                icon="pi pi-plus"
                label=""
                onClick={() => handleAddObject(specializations, setSpecializations, specializationTemplate)}
                type="button"
            />
        </section>
    );
};

export default SpecializationForm;