import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import React, { useState } from "react";

import {
    handleCourseNameChange,
    handleConclusionDateChange,
    handleCourseLocationChange
} from "../handlers/degreeHandlers";


const DegreeForm = () => {
    const [degree, setDegree] = useState({
        degreeCourseName: '',
        degreeCourseLocation: '',
        degreeConclusionDate: ''
    });
    
    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Graduações do Professor</h2>
            <div className="form-row flex">
                {/* Campo para o NOME DO CURSO da graduação. */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="degreeCourseName">Nome do curso:</label>
                    <InputText
                        aria-describedby="degreeCourseName-help"
                        className="w-full text-overflow-ellipsis"
                        id="degreeCourseName"
                        onChange={(e) => handleCourseNameChange(e, degree, setDegree)}
                        value={degree.degreeCourseName}
                    />
                    <small id="degreeCourseName-help">Curso de graduação.</small>
                </div>

                {/* Campo para a DATA DE CONCLUSÃO da graduação. */}
                <div className="w-9rem form-item-date flex flex-column align-items-start">
                    <label htmlFor="degreeConclusionDate">Conclusão:</label>
                    <InputMask
                        aria-describedby="degreeConclusionDate-help"
                        className="w-full text-overflow-ellipsis"
                        id="degreeConclusionDate"
                        mask="99/99/9999"
                        onChange={(e) => handleConclusionDateChange(e, degree, setDegree)}
                        value={degree.degreeConclusionDate}
                    />
                    <small id="degreeConclusionDate-help">Data de conclusão.</small>
                </div>
            </div>

            <div className="form-row flex">
                {/* Campo para o LOCAL da graduação. */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="degreeCourseLocation">Local da Graduação:</label>
                    <InputText
                        aria-describedby="degreeCourseLocation-help"
                        className="w-full text-overflow-ellipsis"
                        id="degreeCourseLocation"
                        onChange={(e) => handleCourseLocationChange(e, degree, setDegree)}
                        value={degree.degreeCourseLocation}
                    />
                    <small id="degreeCourseLocation-help">Local onde a graduação foi realizada.</small>
                </div>
            </div>
        </section>
    );
};

export default DegreeForm;