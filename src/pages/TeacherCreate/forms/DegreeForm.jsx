import { Button } from 'primereact/button';
import React from "react";

import Degree from "../../../components/pages/teacherCreate/Degree/Degree";

import {
    handleAddObject,
    handleFieldChange,
    handleRemoveObject
} from "../../../utils/handlers/handlerUtil";
import { handleFileUpload as uploadHandler } from '../js/handlers';


const DegreeForm = ({ degrees, setDegrees }) => {
    const handleFileUpload = (e, id) => uploadHandler(e, id, degrees, setDegrees);
    const handleChange = (e, id) => handleFieldChange(e, id, degrees, setDegrees);
    const handleRemove = (id) => handleRemoveObject(id, degrees, setDegrees);
    const handleAdd = () => handleAddObject(degrees, setDegrees, {
        degreeCourseName: "",
        degreeCourseLocation: "",
        degreeConclusionDate: "",
        uploadedFiles: [],
    });

    return (
        <section className="border-top-3 border-600 flex flex-column gap-3">
            <h2 className="text-gray-600">Graduações do Professor</h2>
            {degrees.map((degree) => (
                <Degree
                    degree={degree}
                    handleDegreeChange={(e) => handleChange(e, degree.id)}
                    handleFileUpload={handleFileUpload}
                    handleRemoveDegree={() => handleRemove(degree.id)}
                    index={degree.id}
                    key={degree.id}
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

export default DegreeForm;