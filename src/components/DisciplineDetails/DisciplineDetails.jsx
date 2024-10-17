import React, { useEffect, useState } from "react";
import 'primeicons/primeicons.css';
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from "primereact/card";

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

    return(
        <div>
            <div className="col-1 col-offset-11"><Button onClick={onClose} className="popup-close-button"><i className="pi pi-times" /></Button></div>
            <Card>
                <div>
                    <p>Nome disciplina</p>
                    <p>Codigo disciplina</p>

                    <p>grade de horário de aulas</p>
                    <p>os professores vinculados a disciplina</p>
                    <DataTable value={edits}>
                        {columns.map((col, i) => (
                            <Column key={col.field} field={col.field} header={col.header} />
                        ))}
                    </DataTable>
                </div>
            </Card>
        </div>
    )
}

export default DisciplineDetails;

// Adicionar links no nome das disciplinas na lista que redirecionam o usuário para a página de detalhes.

// Implementar a página de detalhes como um pop - up que sobrepõe a lista de disciplinas.

// Exibir na página de detalhes o nome, código, grade de horário, e a opção para visualizar o histórico de edições.

// Implementar a funcionalidade para fechar o pop - up e retornar à lista de disciplinas ao pressionar Esc, clicar em um "x", ou fora do pop - up.

// Realizar testes de interface para garantir que a exibição dos detalhes seja funcional e intuitiva.