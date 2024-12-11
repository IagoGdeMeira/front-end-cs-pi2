import React, { useState } from "react";

import { Button } from "primereact/button";

import DeleteTeacher from "./pop-ups/DeleteTeacher/DeleteTeacher";
import TeacherDetails from "./pop-ups/TeacherDetails/TeacherDetails";

import GlobalVisualConfig from "../../../../utils/configs/GlobalVisualConfig";
import {
    handleDeleteTeacher,
    handleEditTeacher,
    handleViewDetails
} from "./js/handlers";

import PathRoutes from "../../../../utils/PathRoutes";
import EmployeeService from "../../../../services/EmployeeService";


const TeacherItem = ({ teacher, onDelete }) => {
    const { id, name, email, telephone, cpf } = teacher;
    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
    const [detailsDialogVisible, setDetailsDialogVisible] = useState(false);
    const employeeService = new EmployeeService();

    const  handleDeleteTeacher = async (id) =>{
        try {
            const data = await employeeService.delete(id);
            setDeleteDialogVisible(false);
            if (onDelete) onDelete(id); 
        } catch (error) {
            console.error("Erro ao buscar professores:", error);
        }
    }

    return (
        <div className={GlobalVisualConfig.LIST_ITEM}>
            <h3 
                className="cursor-pointer"
                onClick={() => {
                    setDetailsDialogVisible(true);
                    handleViewDetails(id);
                }}
            >{name}</h3>
            <section className={GlobalVisualConfig.LIST_ITEM_CONTENT}>
                <div className={GlobalVisualConfig.LIST_ITEM_INFO}>
                    <span className="flex gap-3">
                        <strong><i 
                            className="pi pi-envelope text-xl vertical-align-middle"
                        /></strong>{email}</span>
                    <span className="flex gap-3">
                        <strong><i
                            className="pi pi-phone text-xl vertical-align-middle"
                        /></strong>{telephone}</span>
                </div>
                <div className="flex flex-column gap-2 w-min">
                    <Button
                        className="hide-label-sm hover:surface-50 p-button-text surface-100 text-bluegray-900"
                        icon="pi pi-pencil"
                        onClick={() => handleEditTeacher(id)}
                        style={{ cursor: 'pointer' }}
                    />
                    <Button
                        className="hide-label-sm p-button-danger"
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

            <TeacherDetails
                onHide={() => setDetailsDialogVisible(false)}
                teacher={teacher}
                visible={detailsDialogVisible}
            />
        </div>
    );
};

export default TeacherItem;