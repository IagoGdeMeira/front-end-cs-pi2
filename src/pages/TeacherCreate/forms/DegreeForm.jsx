import { Button } from 'primereact/button';
import React from "react";

import Degree from "../../../components/pages/teacherCreate/Degree/Degree";

import {
    handleAddObject,
    handleFieldChange,
    handleRemoveObject
} from "../../../utils/handlers/handlerUtil";


const DegreeForm = ({ degrees, setDegrees }) => {
    const degreeTemplate = {
        degreeCourseName: "",
        degreeCourseLocation: "",
        degreeConclusionDate: ""
    };

    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Graduações do Professor</h2>

            {degrees.map((degree, index) => (
                <Degree
                key={index}
                degree={degree}
                handleDegreeChange={(e) => handleFieldChange(e, index, degrees, setDegrees)}
                handleRemoveDegree={() => handleRemoveObject(index, degrees, setDegrees)}
                index={index}
            />
            ))}

            <Button
                className="bg-yellow-500 border-yellow-500 w-full"
                icon="pi pi-plus"
                label=""
                onClick={() => handleAddObject(degrees, setDegrees, degreeTemplate)}
                type="button"
            />
        </section>
    );
};

export default DegreeForm;