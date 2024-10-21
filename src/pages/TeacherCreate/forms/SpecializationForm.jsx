import { Button } from 'primereact/button';
import React from "react";

import Specialization from "../../../components/pages/teacherCreate/Specialization/Specialization";

import {
    handleAddObject,
    handleFieldChange,
    handleRemoveObject
} from "../../../utils/handlers/handlerUtil";
import { handleFileUpload as uploadHandler } from '../js/handlers';


const SpecializationForm = ({ specializations, setSpecializations }) => {
    const handleFileUpload = (e, id) => uploadHandler(e, id, specializations, setSpecializations);
    const handleChange = (e, id) => handleFieldChange(e, id, specializations, setSpecializations);
    const handleRemove = (id) => handleRemoveObject(id, specializations, setSpecializations);
    const handleAdd = () => handleAddObject(specializations, setSpecializations, {
        specializationCourseName: "",
        specializationCourseLocation: "",
        specializationConclusionDate: "",
        uploadedFiles: []
    });

    return (
        <section className="border-top-3 border-600 flex flex-column gap-3">
            <h2 className="text-gray-600">Especializações do Professor</h2>
            {specializations.map((specialization) => (
                <Specialization
                    handleSpecializationChange={(e) => handleChange(e, specialization.id)}
                    handleFileUpload={handleFileUpload}
                    handleRemoveSpecialization={() => handleRemove(specialization.id)}
                    index={specialization.id}
                    key={specialization.id}
                    specialization={specialization}
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