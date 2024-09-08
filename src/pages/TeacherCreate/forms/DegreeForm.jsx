import { Button } from 'primereact/button';
import Degree from "../../../components/Degree/Degree";
import React from "react";


const DegreeForm = ({ degrees, setDegrees }) => {
    const addDegree = () => {
        setDegrees([...degrees, {
            degreeCourseName: '',
            degreeCourseLocation: '',
            degreeConclusionDate: ''
        }]);
    };

    const handleDegreeChange = (index, field, value) => {
        const newDegrees = [...degrees];
        newDegrees[index][field] = value;
        setDegrees(newDegrees);
    };
    
    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Graduações do Professor</h2>

            {degrees.map((degree, index) => (
                <Degree
                    degree={degree}
                    key={index}
                    setDegree={(field, value) => handleDegreeChange(index, field, value)}
                />
            ))}

            <Button label="Adicionar Graduação" icon="pi pi-plus" onClick={addDegree} />
        </section>
    );
};

export default DegreeForm;