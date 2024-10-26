import "./NewDiscipline.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import DisciplineForm from "./forms/DisciplineForm";
import SimpleLayout from "../../components/layouts/simpleLayout/SimpleLayout";


const NewDiscipline = () => {
    const navigate = useNavigate();

    const [discipline, setDiscipline] = useState({});
    const [errors, setErrors] = useState([]);

    return (
        <SimpleLayout>
            <form className="
                bg-bluegray-100
                border-noround
                grid
                md:px-4
                px-1
                py-3
                sm:border-round-lg"
            >
                <DisciplineForm errors={errors} discipline={discipline} setDiscipline={setDiscipline}/>
            </form>
        </SimpleLayout>
    );
};

export default NewDiscipline;