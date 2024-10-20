import { Button } from 'primereact/button';
import React from "react";

import Degree from "../../../components/pages/teacherCreate/Degree/Degree";

import {
    handleAddObject,
    handleFieldChange,
    handleRemoveObject
} from "../../../utils/handlers/handlerUtil";


const DegreeForm = ({ degrees, setDegrees }) => {
    const handleAdd = () => {
        const newDegree = {
            degreeCourseName: "",
            degreeCourseLocation: "",
            degreeConclusionDate: ""
        };

        handleAddObject(degrees, setDegrees, newDegree);
    };

    const handleChange = (e, index) => handleFieldChange(e, index, degrees, setDegrees);
    const handleRemove = (index) => handleRemoveObject(index, degrees, setDegrees);

    return (
        <section className="border-top-3 border-600 flex flex-column gap-3">
            <h2 className="text-gray-600">Graduações do Professor</h2>

            {degrees.map((degree, index) => (
                <Degree
                    key={index}
                    degree={degree}
                    handleDegreeChange={(e) => handleChange(e, index)}
                    handleRemoveDegree={() => handleRemove(index)}
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

export default DegreeForm;