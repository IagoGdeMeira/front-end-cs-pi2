import React, { useState } from "react";
import Degree from "../../../components/Degree/Degree";

const DegreeForm = () => {
    const [degree, setDegree] = useState({
        degreeCourseName: '',
        degreeCourseLocation: '',
        degreeConclusionDate: ''
    });
    
    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Graduações do Professor</h2>
            <Degree
                degree={degree}
                setDegree={setDegree}
            />
        </section>
    );
};

export default DegreeForm;