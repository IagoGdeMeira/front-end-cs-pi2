import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


const DeleteTeacher = ({ visible, onHide, onConfirm, teacherName, teacherCPF }) => {
    const [confirmationInput, setConfirmationInput] = useState("");

    const handleConfirm = () => {
        onConfirm();
        setConfirmationInput("");
    };

    return (
        <Dialog
            className="min-w-min w-30rem"
            draggable={false}
            header={dialogHeader}
            modal
            onHide={() => {
                onHide();
                setConfirmationInput("");
            }}
            visible={visible}
        >
            <p>Atenção, você está prestes a excluir o professor do sistema!</p>
            <p>Caso prossiga, <strong>esse processo não poderá ser desfeito!</strong></p>
            <p>
                Para confirmar suas intenções, digite
                <em> {`"${teacherName} - ${teacherCPF}"`} </em>
                no campo de preenchimento abaixo. Ao fazer isso, você compreende
                e concorda com as consequências da exclusão da disciplina.
            </p>
            <InputText
                value={confirmationInput}
                onChange={(e) => setConfirmationInput(e.target.value)}
                placeholder="Digite o código de permissão."
                className="w-full"
            />
            <div className="mt-3">
                <Button
                    className="hide-label-sm p-button-danger w-full"
                    disabled={confirmationInput !== `${teacherName} - ${teacherCPF}`}
                    label="Entendo e concordo com as consequências da decisão."
                    onClick={handleConfirm}
                />
            </div>
        </Dialog>
    );
};

export default DeleteTeacher;

const dialogHeader = (
    <div className="align-items-center flex text-red-600">
        <i className="mr-2 pi pi-exclamation-triangle text-4xl"></i>
        <span>CONFIRMAR EXCLUSÃO</span>
    </div>
);