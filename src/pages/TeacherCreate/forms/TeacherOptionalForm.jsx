import { InputNumber } from 'primereact/inputnumber';
import React, { useState } from 'react';

import DropdownCities from '../../../components/pages/teacherCreate/DropdownCities/DropdownCities';
import DropdownStates from '../../../components/pages/teacherCreate/DropdownStates/DropdownStates';
import { handleFieldChange } from '../../../utils/handlers/handlerUtil';


const TeacherOptionalForm = ({ teacher, setTeacher }) => {
    const [selectedState, setSelectedState] = useState(null);

    return (
        <div className="optional-teacher-fields">
            <div className="form-row flex">
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="teacherBirthState">Estado Natal:</label>
                    <DropdownStates
                        className="w-full text-left white-space-nowrap overflow-hidden text-overflow-clip"
                        id="TeacherBirthState"
                        name="teacherBirthState"
                        onChange={(e) => {
                            setSelectedState(e.value);
                            handleFieldChange(e, teacher, setTeacher);
                        }}
                        value={teacher.teacherBirthState}
                    />
                    <small id="teacherBirthState-help">Campo do estado natal do professor.</small>
                </div>

                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="teacherBirthCity">Cidade Natal:</label>
                    <DropdownCities
                        className="w-full text-left white-space-nowrap overflow-hidden text-overflow-clip"
                        id="TeacherBirthCity"
                        name="teacherBirthCity"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        stateId={selectedState}
                        value={teacher.teacherBirthCity}
                    />
                    <small id="teacherBirthCity-help">Campo da cidade natal do professor.</small>
                </div>
            </div>

            <div className="form-item-integer-input flex flex-column align-items-start">
                <label htmlFor="teacherWorkedHours">Horas:</label>
                <InputNumber
                    aria-describedby="teacherWorkedHours-help"
                    className="w-full text-overflow-ellipsis"
                    id="teacherWorkedHours"
                    name="teacherWorkedHours"
                    onChange={(e) => handleFieldChange(e.value, teacher, setTeacher)}
                    useGrouping={false}
                    value={teacher.teacherWorkedHours}
                />
                <small id="teacherWorkedHours-help">Horas/Aula</small>
            </div>
        </div>
    );
};

export default TeacherOptionalForm;