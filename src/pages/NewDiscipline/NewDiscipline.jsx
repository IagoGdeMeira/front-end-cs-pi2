import "./NewDiscipline.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";

import DisciplineForm from "./forms/DisciplineForm";
import SimpleLayout from '../../components/layouts/SimpleLayout/SimpleLayout';

import { areRequiredFieldsFilled } from "./js/validators";
import GlobalVisualConfig from "../../utils/configs/GlobalVisualConfig";
import PathRoutes from "../../utils/PathRoutes";


const NewDiscipline = () => {
    const navigate = useNavigate();

    const [discipline, setDiscipline] = useState({});
    const [errors, setErrors] = useState([]);

    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);

    useEffect(() => {
        const allFieldsFilled = areRequiredFieldsFilled(discipline);
        setSaveButtonDisabled(!allFieldsFilled);
    }, [discipline]);

    const handleDisciplineValidation = () => {
        const newErrors = {};

        if(!discipline.disciplineName)
            newErrors.disciplineName = "Nome informado é inválido.";
        if(!discipline.disciplineCode)
            newErrors.disciplineCode = "Código informado é inválido";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(handleDisciplineValidation()) {
            console.log("Form submitted:", discipline);
        }
    };

    return (
        <SimpleLayout>
            <form className={GlobalVisualConfig.FORM}>
                <DisciplineForm errors={errors} discipline={discipline} setDiscipline={setDiscipline}/>
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
        </SimpleLayout>
    );
};

export default NewDiscipline;