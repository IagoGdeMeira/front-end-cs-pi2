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
            draggable={false}
            header="Confirmar Exclusão"
            modal
            onHide={() => {
                onHide();
                setConfirmationInput("");
            }}
            style={{
                maxWidth: '30vw',
                minWidth: '15vw'
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
            <div className="mt-3 flex justify-content-end">
                <Button
                    className="p-button-text"
                    icon="pi pi-times"
                    label="Cancelar"
                    onClick={onHide}
                />
                <Button
                    className="p-button-danger"
                    disabled={confirmationInput !== `${teacherName} - ${teacherCPF}`}
                    icon="pi pi-trash"
                    label="Excluir"
                    onClick={handleConfirm}
                />
            </div>
        </Dialog>
    );
};

export default DeleteTeacher;