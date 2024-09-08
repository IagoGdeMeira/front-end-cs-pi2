import { Button } from 'primereact/button';
import Degree from "../../../components/Degree/Degree";
import React from "react";


const DegreeForm = ({ degrees, setDegrees, handleAddDegree, handleDegreeChange }) => {
    const handleAdd = (e) => {
        e.preventDefault();
        handleAddDegree(degrees, setDegrees);
    };

    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Graduações do Professor</h2>

            {degrees.map((degree, index) => (
                <Degree
                    degree={degree}
                    key={index}
                    setDegree={(field, value) => handleDegreeChange(index, field, value, degrees, setDegrees)}
                />
            ))}

            <Button label="Adicionar Graduação" icon="pi pi-plus" onClick={handleAdd} />
        </section>
    );
};

export default DegreeForm;