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
        </Dialog>
    );
};

export default TeacherDetails;