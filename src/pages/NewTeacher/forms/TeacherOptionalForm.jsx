import { InputNumber } from 'primereact/inputnumber';
import React, { useState } from 'react';

import DropdownCities from '../../../components/pages/NewTeacher/DropdownCities/DropdownCities';
import DropdownStates from '../../../components/pages/NewTeacher/DropdownStates/DropdownStates';

import { handleFieldChange } from '../../../utils/handlers/globalHandlers';
import GlobalVisualConfig from '../../../utils/configs/GlobalVisualConfig';


const TeacherOptionalForm = ({ teacher, setTeacher }) => {
    const [selectedState, setSelectedState] = useState(null);
    const handleChange = (e) => handleFieldChange(e, teacher, setTeacher);

    return (
        <section className="grid">
            <div className={"col md:col-5" + GlobalVisualConfig.INPUT}>
                <label
                    className={GlobalVisualConfig.LABEL}
                    htmlFor="teacherBirthState"
                >Estado Natal:</label>
                <DropdownStates
                    className="text-overflow-ellipsis"
                    id="teacherBirthState"
                    name="teacherBirthState"
                    onChange={(e) => {
                        setSelectedState(e.value);
                        handleChange(e);
                    }}
                    value={teacher.teacherBirthState}
                />
            </div>
            <div className={"col md:col-5" + GlobalVisualConfig.INPUT}>
                <label
                    className={GlobalVisualConfig.LABEL}
                    htmlFor="teacherBirthCity"
                >Cidade Natal:</label>
                <DropdownCities
                    className="text-overflow-ellipsis"
                    id="teacherBirthCity"
                    name="teacherBirthCity"
                    stateId={selectedState}
                    onChange={(e) => handleChange(e)}
                    value={teacher.teacherBirthCity}
                />
            </div>
            <div className={"col md:col-2" + GlobalVisualConfig.INPUT}>
                <label
                    className={GlobalVisualConfig.LABEL}
                    htmlFor="teacherWorkedHours"
                >Horas/Aula:</label>
                <InputNumber
                    className="max-w-full text-overflow-ellipsis"
                    id="teacherWorkedHours"
                    name="teacherWorkedHours"
                    onChange={(e) => handleChange(e)}
                    useGrouping={false}
                    value={teacher.teacherWorkedHours}
                />
            </div>
        </section>
    );
};

export default TeacherOptionalForm;