import React, { useState } from "react";
import Specialization from "../../../components/Specialization/Specialization";


const SpecializationForm = ({ specializations, setSpecializations }) => {
    const [specialization, setSpecialization] = useState({
        specializationCourseName: '',
        specializationCourseLocation: '',
        specializationConclusionDate: ''
    });
    
    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Especializações do Professor</h2>
            <Specialization
                specialization={specialization}
                setSpecialization={setSpecialization}
            />
        </section>
    );
};

export default SpecializationForm;