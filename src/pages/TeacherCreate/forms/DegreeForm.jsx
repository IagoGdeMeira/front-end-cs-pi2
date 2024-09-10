import { Button } from 'primereact/button';
import Degree from "../../../components/pages/teacherCreate/Degree/Degree";
import React from "react";

import {
    handleAddDegree,
    handleRemoveDegree,
    handleDegreeChange
} from "../handlers/formHandlers/degreeFormHandlers";


const DegreeForm = ({ degrees, setDegrees }) => {
    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Graduações do Professor</h2>

            {degrees.map((degree, index) => (
                <Degree
                key={index}
                degree={degree}
                handleDegreeChange={(e) => handleDegreeChange(e, index, degrees, setDegrees)}
                handleRemoveDegree={() => handleRemoveDegree(index, degrees, setDegrees)}
                index={index}
            />
            ))}

            <Button
                className="bg-yellow-500 border-yellow-500 w-full"
                icon="pi pi-plus"
                label=""
                onClick={() => handleAddDegree(degrees, setDegrees)}
                type="button"
            />
        </section>
    );
};

export default DegreeForm;