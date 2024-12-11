import "./TeacherDetails.css";

import React from 'react';
import { Dialog } from 'primereact/dialog';


const TeacherDetails = ({ visible, onHide, teacher }) => {
    const dialogHeader = (
        <div className="align-items-center flex gap-3">
            <i className="pi pi-user text-2xl" />
            <span>{teacher.name}</span>
        </div>
    );

    const formatDate = (date) => {
        if (!date) return 'Data inválida'; // Caso a data não seja fornecida.
        const [year, month, day] = date.split('T')[0].split('-');
        return `${day}/${month}/${year}`;
    };
    return (
        <Dialog
            className="min-w-min teacher-details"
            draggable={false}
            header={dialogHeader}
            modal
            onHide={() => onHide()}
            visible={visible}
        >
            <h2>Dados Principais:</h2>
            <ul className="flex flex-column gap-2 list-none">
                <li><strong>Data de Nascimento: </strong>{formatDate(teacher.birthDate)}</li>
                <li><strong>E-mail: </strong>{teacher.email}</li>
                <li><strong>Telefone: </strong>{teacher.telephone}</li>
                <li><strong>CPF: </strong>{teacher.cpf}</li>
                <li><strong>RG: </strong>{teacher.rg}</li>
                <li><strong>Cidade Natal: </strong>{`${teacher.birthCity} - ${teacher.birthState}`}</li>
                <li><strong>Horas Trabalhadas: </strong>{teacher.workedHours}</li>
            </ul>
            <h3>Endereço Residencial:</h3>
            <ul className="flex flex-column gap-2 list-none">
                <li><strong>CEP: </strong>{teacher.address.cep}</li>
                <li><strong>Número: </strong>{teacher.address.number}</li>
                <li><strong>Rua: </strong>{teacher.address.street}</li>
                <li><strong>Bairro: </strong>{teacher.address.neighborhood}</li>
                <li><strong>Cidade: </strong>{teacher.address.municipality}</li>
            </ul>
        </Dialog>
    );
};

export default TeacherDetails;