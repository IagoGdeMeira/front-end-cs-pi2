import styles from "./DisciplineDetails.module.css"

import React, { useEffect, useState } from "react";
import 'primeicons/primeicons.css';
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";

const DisciplineDetails = ({onClose}) =>{
    const [edits, setEdits] = useState([]);

    
    const columns = [
        {field: 'idModifier', header: 'Id de modificação'},
        {field: 'personModified', header: 'Pessoa'},
        {field: 'modified', header: "Modificação"}
    ]

    // useEffect(() =>{
    //     // EditsService.getEdits().then(data=> setEdits(data));
    // }, []);
    const [dialogVisible, setDialogVisible] = useState(false);


    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogVisible(false)} />;
    };

    return(
        <div>
            <div>
                <Button label="Show" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
            </div>
            <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable modal contentStyle={{ height: '200vw' }} onHide={() => setDialogVisible(false)} closeOnEscape={true}>
                <div>
                    <Card>
                        <div>
                            <p>Nome disciplina</p>
                            <p>Codigo disciplina</p>

                            <p>grade de horário de aulas</p>
                            <p>os professores vinculados a disciplina</p>
                            <div className={styles["container-details"]}>a</div>
                            <DataTable value={edits}>
                                {columns.map((col, i) => (
                                    <Column key={col.field} field={col.field} header={col.header} />
                                ))}
                            </DataTable>
                        </div>
                    </Card>
                </div>
            </Dialog>
        </div>
    )
}

export default DisciplineDetails;

// Adicionar links no nome das disciplinas na lista que redirecionam o usuário para a página de detalhes.

// Implementar a página de detalhes como um pop - up que sobrepõe a lista de disciplinas.

// Exibir na página de detalhes o nome, código, grade de horário, e a opção para visualizar o histórico de edições.

// Implementar a funcionalidade para fechar o pop - up e retornar à lista de disciplinas ao pressionar Esc, clicar em um "x", ou fora do pop - up.

// Realizar testes de interface para garantir que a exibição dos detalhes seja funcional e intuitiva.