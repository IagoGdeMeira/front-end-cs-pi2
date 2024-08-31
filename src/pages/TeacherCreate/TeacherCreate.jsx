import './CreateTeacher.css';

import React, { useState } from "react";
import SimpleLayout from '../../components/layouts/simpleLayout/SimpleLayout';


const TeacherCreate = () => {
    const [teacher, setTeacher] = useState({
        teacherName: '',        // PENDENTE
        teacherCPF: '',         // PENDENTE
        teacherRG: '',          // PENDENTE
        teacherEmail: '',       // PENDENTE
        teacherPhoneNumber: '', // PENDENTE
        teacherBirthDate: '',   // PENDENTE
        teacherBirthCity: '',   // PENDENTE
        teacherBirthState: '',  // PENDENTE
        teacherWorkedHours: ''  // PENDENTE 

        /* Preciso adicionar os campos das outras entidades. */
    });

    return (
        <SimpleLayout>
            <form>

            </form>
        </SimpleLayout>
    );
}

export default TeacherCreate;