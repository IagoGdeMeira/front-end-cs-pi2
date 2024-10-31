import React, { useState } from "react";

import { Button } from "primereact/button";

import DeleteTeacher from "./pop-ups/DeleteTeacher/DeleteTeacher";

import {
    handleDeleteTeacher,
    handleEditTeacher,
    handleViewDetails
} from "./js/handlers";


const TeacherItem = ({ teacher }) => {
    const { id, name, email, phone, cpf } = teacher;
    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);

    return (
        <div className="border-round-lg p-2 surface-200 w-full">
            <h3 
                className="cursor-pointer"
                onClick={() => handleViewDetails(id)}
            >{name}</h3>
            <section className="flex flex-row gap-4">
                <div className="flex flex-column gap-1">
                    <span>{email}</span>
                    <span>{phone}</span>
                </div>
                <div className="flex flex-column gap-1">
                    <Button
                        className="p-button-text"
                        icon="pi pi-pencil"
                        onClick={() => handleEditTeacher(id)}
                        style={{ cursor: 'pointer' }}
                    />
                    <Button
                        className="p-button-danger text-red-400"
                        icon="pi pi-trash"
                        onClick={() => setDeleteDialogVisible(true)}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </section>

            <DeleteTeacher
                visible={deleteDialogVisible}
                onHide={() => setDeleteDialogVisible(false)}
                onConfirm={() => handleDeleteTeacher(id)}
                teacherCPF={cpf}
                teacherName={name}
            />
        </div>
    );
};

export default TeacherItem;