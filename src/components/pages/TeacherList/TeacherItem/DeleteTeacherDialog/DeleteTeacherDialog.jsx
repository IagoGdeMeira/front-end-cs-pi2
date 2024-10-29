import React from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


const DeleteTeacherDialog = ({ visible, onHide, onConfirm, teacherName }) => {
    const [confirmationInput, setConfirmationInput] = React.useState("");

    const handleConfirm = () => {
        if (confirmationInput === `${teacherName}`) {
            onConfirm();
            setConfirmationInput("");
        } else {
            alert("Por favor, insira o nome correto.");
        }
    };

    return (
        <Dialog
            header="Confirmar Exclusão"
            visible={visible}
            style={{ width: '50vw' }}
            modal
            onHide={() => {
                onHide();
                setConfirmationInput("");
            }}
        >
            <p>Para excluir, digite o nome completo do professor.</p>
            <InputText
                value={confirmationInput}
                onChange={(e) => setConfirmationInput(e.target.value)}
                placeholder={`${teacherName}`}
                className="w-full"
            />
            <div className="mt-3 flex justify-content-end">
                <Button label="Cancelar" icon="pi pi-times" onClick={onHide} className="p-button-text" />
                <Button label="Excluir" icon="pi pi-trash" className="p-button-danger" onClick={handleConfirm} />
            </div>
        </Dialog>
    );
};

export default DeleteTeacherDialog;
