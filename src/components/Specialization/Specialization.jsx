import "./Specialization.css";

import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";

import {
    handleCourseNameChange,
    handleConclusionDateChange,
    handleCourseLocationChange
} from "./handlers/specializationHandlers";


const Specialization = ({ specialization, setSpecialization }) => {
    return (
        <section className="specialization-section flex flex-column surface-100 border-2 border-200">
            <div className="form-row flex">
                {/* Campo para o NOME DO CURSO da especialização. */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="specializationCourseName">Nome do curso:</label>
                    <InputText
                        aria-describedby="specializationCourseName-help"
                        className="w-full text-overflow-ellipsis"
                        id="specializationCourseName"
                        onChange={(e) => handleCourseNameChange(e, specialization, setSpecialization)}
                        value={specialization.specializationCourseName}
                    />
                    <small id="specializationCourseName-help">Curso de especialização.</small>
                </div>

                {/* Campo para a DATA DE CONCLUSÃO da especialização. */}
                <div className="w-9rem form-item-date flex flex-column align-items-start">
                    <label htmlFor="specializationConclusionDate">Conclusão:</label>
                    <InputMask
                        aria-describedby="specializationConclusionDate-help"
                        className="w-full text-overflow-ellipsis"
                        id="specializationConclusionDate"
                        mask="99/99/9999"
                        onChange={(e) => handleConclusionDateChange(e, specialization, setSpecialization)}
                        value={specialization.specializationConclusionDate}
                    />
                    <small id="specializationConclusionDate-help">Data de conclusão.</small>
                </div>
            </div>

            <div className="form-row flex">
                {/* Campo para o LOCAL da graduação. */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="specializationCourseLocation">Local da Especialização:</label>
                    <InputText
                        aria-describedby="specializationCourseLocation-help"
                        className="w-full text-overflow-ellipsis"
                        id="specializationCourseLocation"
                        onChange={(e) => handleCourseLocationChange(e, specialization, setSpecialization)}
                        value={specialization.specializationCourseLocation}
                    />
                    <small id="specializationCourseLocation-help">Local onde a especialização foi realizada.</small>
                </div>
            </div>
        </section>
    );
};

export default Specialization;