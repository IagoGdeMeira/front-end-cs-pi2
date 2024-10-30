import React, { useState } from "react";

import DeleteTeacher from "./pop-ups/DeleteTeacher/DeleteTeacher";

import {
    handleDeleteTeacher,
    handleEditTeacher,
    handleViewDetails
} from "./js/handlers";


const TeacherItem = ({ teacher }) => {
    const { id, name, email, phone } = teacher;
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
                    <i className="pi pi-pencil" onClick={() => handleEditTeacher(id)} />
                    <i className="pi pi-trash text-red-400" onClick={() => setDeleteDialogVisible(true)} />
                </div>
            </section>

            <DeleteTeacher
                visible={deleteDialogVisible}
                onHide={() => setDeleteDialogVisible(false)}
                onConfirm={() => handleDeleteTeacher(id)}
                teacherName={name}
            />
        </div>
    );
};

export default TeacherItem;