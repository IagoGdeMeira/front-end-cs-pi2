import "./NewSubject.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";

import DisciplineForm from "./forms/SubjectForm";
import SimpleLayout from '../../components/layouts/SimpleLayout/SimpleLayout';

import { areRequiredFieldsFilled } from "../../utils/validators/globalValidators";
import GlobalVisualConfig from "../../utils/configs/GlobalVisualConfig";
import PathRoutes from "../../utils/PathRoutes";


const NewSubject = () => {
    const navigate = useNavigate();

    const [subject, setSubject] = useState({});
    const [errors, setErrors] = useState([]);
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

    useEffect(() => {
        const requiredFields = [
            'subjectName',
            'subjectCode'
        ];

        const allFieldsFilled = areRequiredFieldsFilled(subject, requiredFields);
        setSaveButtonDisabled(!allFieldsFilled);
    }, [subject]);

    const handleSubjectValidation = () => {
        const newErrors = {};

        if(!subject.subjectName)
            newErrors.subjectName = "Nome informado é inválido.";
        if(!subject.subjectCode)
            newErrors.subjectCode = "Código informado é inválido";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(handleSubjectValidation()) {
            console.log("Form submitted:", subject);
        }
    };

    return (
            <form className={GlobalVisualConfig.FORM}>
                <DisciplineForm errors={errors} subject={subject} setSubject={setSubject}/>
                <div className="col-12 flex gap-4 justify-content-center">
                    <Button
                        className={GlobalVisualConfig.CANCEL_BUTTON + "w-9rem"}
                        label="Cancelar"
                        onClick={() => navigate(PathRoutes.HOME)}
                    />
                    <Button
                        className={GlobalVisualConfig.SAVE_BUTTON + "w-9rem"}
                        disabled={saveButtonDisabled}
                        label="Salvar"
                        onClick={handleSubmit}
                    />
                </div>
            </form>
    );
};

export default NewSubject;