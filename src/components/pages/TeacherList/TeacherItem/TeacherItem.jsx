import React, { useState } from "react";

import { Button } from "primereact/button";

import DeleteTeacher from "./pop-ups/DeleteTeacher/DeleteTeacher";

import GlobalVisualConfig from "../../../../utils/configs/GlobalVisualConfig";
import {
    handleDeleteTeacher,
    handleEditTeacher,
    handleViewDetails
} from "./js/handlers";


const TeacherItem = ({ teacher }) => {
    const { id, name, email, phone, cpf } = teacher;
    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);

    return (
        <div className={GlobalVisualConfig.LIST_ITEM}>
            <h3 
                className="cursor-pointer"
                onClick={() => handleViewDetails(id)}
            >{name}</h3>
            <section className={GlobalVisualConfig.LIST_ITEM_CONTENT}>
                <div className={GlobalVisualConfig.LIST_ITEM_INFO}>
                    <span className="flex gap-3"><strong><i className="pi pi-envelope"/></strong>{email}</span>
                    <span className="flex gap-3"><strong><i className="pi pi-phone"/></strong>{phone}</span>
                </div>
                <div className="flex flex-column gap-2 w-min">
                    <Button
                        className="p-button-text hover:surface-50 surface-100 text-bluegray-900"
                        icon="pi pi-pencil"
                        onClick={() => handleEditTeacher(id)}
                        style={{ cursor: 'pointer' }}
                    />
                    <Button
                        className="p-button-danger"
                        icon="pi pi-trash"
                        onClick={() => setDeleteDialogVisible(true)}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
            </section>

            <DeleteTeacher
                onConfirm={() => handleDeleteTeacher(id)}
                onHide={() => setDeleteDialogVisible(false)}
                teacherCPF={cpf}
                teacherName={name}
                visible={deleteDialogVisible}
            />
        </div>
    );
};

export default TeacherItem;