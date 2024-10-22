import React, { useEffect, useState } from "react";
import 'primeicons/primeicons.css';
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from "primereact/card";

const DisciplineDetails = ({onClose}) =>{
    const [edits, setEdits] = useState([]);

    const colluns = [
        {field: 'idModifier', header: 'Id de modificação'},
        {field: 'pesonModified', header: 'Pessoa'},
        {field: 'modified', header: "Modificação"}
    ]

    return(
        <div>
            <div className="col-1 col-offset-11"><Button onClick={onClose} className="popup-close-button"><i className="pi pi-times" /></Button></div>
            <Card>
                <div>
                    <p>Nome Disciplina</p>
                    <p>Código Disciplina</p>

                    <DataTable>
                        <Column>Edição 1</Column>
                        <Column>Edição 2</Column>
                        <Column>Edição 3</Column>
                        <Column>Edição 4</Column>
                        <Column>Edição 5</Column>
                        <Column>Edição 6</Column>
                        <Column>Edição 7</Column>
                        <Column>Edição 8</Column>
                        <Column>Edição 9</Column>
                        <Column>Edição 10</Column>
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