import { Button } from 'primereact/button';
import React from "react";

import Specialization from "../../../components/pages/teacherCreate/Specialization/Specialization";

import {
    handleAddObject,
    handleFieldChange,
    handleRemoveObject
} from "../../../utils/handlers/handlerUtil";


const SpecializationForm = ({ specializations, setSpecializations }) => {
    const handleAdd = () => {
        const newDegree = {
            specializationCourseName: "",
            specializationCourseLocation: "",
            specializationConclusionDate: ""
        };

        handleAddObject(specializations, setSpecializations, newDegree);
    };

    const handleChange = (e, index) => handleFieldChange(e, index, specializations, setSpecializations);
    const handleRemove = (index) => handleRemoveObject(index, specializations, setSpecializations);

    return (
        <section className="border-top-3 border-600 flex flex-column gap-3">
            <h2 className="text-gray-600">Especializações do Professor</h2>

            {specializations.map((specialization, index) => (
                <Specialization
                    key={index}
                    specialization={specialization}
                    handleSpecializationChange={(e, index) => handleChange(e, index)}
                    handleRemoveSpecialization={() => handleRemove(index)}
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

export default SpecializationForm;