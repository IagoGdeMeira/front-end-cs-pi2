import { Button } from 'primereact/button';
import Degree from "../../../components/Degree/Degree";
import React from "react";

import {
    handleAddDegree,
    handleDegreeChange,
} from "../handlers/formHandlers/degreeFormHandlers";


const DegreeForm = ({ degrees, setDegrees }) => {
    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Graduações do Professor</h2>

            {degrees.map((degree, index) => (
                <Degree
                    key={index}
                    degree={degree}
                    setDegree={(e) => handleDegreeChange(e, index, degrees, setDegrees)}
                />
            ))}

            <Button
                icon="pi pi-plus"
                label="Adicionar Graduação"
                onClick={() => handleAddDegree(degrees, setDegrees)}
                type="button"
            />
        </section>
    );
};

export default DegreeForm;