import "./TeacherDetails.css";

import React from 'react';
import { Dialog } from 'primereact/dialog';


const TeacherDetails = ({ visible, onHide, teacher }) => {
    const dialogHeader = (
        <div className="align-items-center flex gap-3">
            <i className="pi pi-user text-2xl"/>
            <span>{teacher.name}</span>
        </div>
    );

    return (
        <Dialog
            className="min-w-min teacher-details"
            draggable={false}
            header={dialogHeader}
            modal
            onHide={() => onHide()}
            visible={visible}
        >
            <ul className="flex flex-column gap-2 list-none">
                <li><strong>Data de Nascimento: </strong>{teacher.birthDate}</li>
                <li><strong>E-mail: </strong>{teacher.email}</li>
                <li><strong>Telefone: </strong>{teacher.phone}</li>
                <li><strong>CPF: </strong>{teacher.cpf}</li>
                <li><strong>RG: </strong>{teacher.rg}</li>
                <li><strong>Cidade Natal: </strong>{`${teacher.birthCity} - ${teacher.birthState}`}</li>
                <li><strong>Horas Trabalhadas: </strong>{teacher.workedHours}</li>
            </ul>
        </Dialog>
    );
};

export default TeacherDetails;