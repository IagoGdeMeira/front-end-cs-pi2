import { InputNumber } from 'primereact/inputnumber';
import React, { useState } from 'react';

import DropdownCities from '../../../components/pages/teacherCreate/DropdownCities/DropdownCities';
import DropdownStates from '../../../components/pages/teacherCreate/DropdownStates/DropdownStates';
import { handleFieldChange } from '../../../utils/handlers/handlerUtil';


const TeacherOptionalForm = ({ teacher, setTeacher }) => {
    const [selectedState, setSelectedState] = useState(null);

    return (
        <div className="p-grid">
            <div className="p-field p-col">
                <label htmlFor="teacherBirthState">Estado Natal</label>
                <DropdownStates
                    id="teacherBirthState"
                    name="teacherBirthState"
                    onChange={(e) => {
                        setSelectedState(e.value);
                        handleFieldChange(e, teacher, setTeacher);
                    }}
                    value={teacher.teacherBirthState}
                />
                <small id="teacherBirthState-help" className="p-d-block">Campo do estado natal</small>
            </div>

            <div className="p-field p-col">
                <label htmlFor="teacherBirthCity">Cidade Natal</label>
                <DropdownCities
                    id="teacherBirthCity"
                    name="teacherBirthCity"
                    stateId={selectedState}
                    onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                    value={teacher.teacherBirthCity}
                />
                <small id="teacherBirthCity-help" className="p-d-block">Campo da cidade natal</small>
            </div>

            <div className="p-field p-col">
                <label htmlFor="teacherWorkedHours">Horas/Aula</label>
                <InputNumber
                    id="teacherWorkedHours"
                    name="teacherWorkedHours"
                    onChange={(e) => handleFieldChange(e.value, teacher, setTeacher)}
                    useGrouping={false}
                    value={teacher.teacherWorkedHours}
                />
                <small id="teacherWorkedHours-help" className="p-d-block">Horas de aula</small>
            </div>
        </div>
    );
};

export default TeacherOptionalForm;