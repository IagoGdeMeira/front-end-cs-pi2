import styles from "./DisciplineDetails.module.css"

import React, { useEffect, useState } from "react";
import 'primeicons/primeicons.css';
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";

function DisciplineDetails(onClose){
    const [edits, setEdits] = useState([]);
    
    const columns = [
        {field: 'idModifier', header: 'Id de modificação'},
        {field: 'personModified', header: 'Pessoa'},
        {field: 'modified', header: "Modificação"}
    ]

    let [dialogVisible, setDialogVisible] = useState(false);

    const data = [
        { col1: 'PRIMEIRA AULA 7:30 AS 8:20', col2: 'Matemática', col3: 'História', col4: 'Física', col5: 'Biologia', col6: 'Geografia' },
        { col1: 'SEGUNDA AULA 8:20 AS 9:10', col2: 'Português', col3: 'Geografia', col4: 'Química', col5: 'Matemática', col6: 'Educação Física' },
        { col1: 'TERCEIRA AULA 9:10 AS 10:00', col2: 'Inglês', col3: 'Português', col4: 'Matemática', col5: 'Química', col6: 'Filosofia' },
        { col1: 'INTERVALO 10:00 AS 10:20', col2: 'INTERVALO', col3: 'INTERVALO', col4: 'INTERVALO', col5: 'INTERVALO', col6: 'INTERVALO' },
        { col1: 'QUARTA AULA 10:20 AS 11:10', col2: 'Ciências', col3: 'Educação Física', col4: 'Português', col5: 'Física', col6: 'Sociologia' },
        { col1: 'QUINTA AULA 11:10 AS 12:00', col2: 'História', col3: 'Matemática', col4: 'Inglês', col5: 'Geografia', col6: 'Arte' }
    ];

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogVisible(false)} />;
    };

    return(
        <div>
            <div>
            <Button className={styles['button-box']} label="Show" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
            </div >
            <div>
                <Dialog header="Detalhes da disciplina" visible={dialogVisible} style={{ width: '75vw' }} maximizable modal contentStyle={{ height: '200vw' }} onHide={() => setDialogVisible(false)} closeOnEscape={true} >
                    <div>
                        <Card>
                            <div>
                                <p>Disciplina: Matemática</p>
                                <p>Codigo de Disciplina: 1265</p>
                                <div  className={styles["table-container"]}>
                                    <table className={styles["table"]} border="1">
                                        <thead>
                                            <tr>
                                                <th >Horarios</th>
                                                <th className={styles["columns"]}>Segunda-Feira</th>
                                                <th className={styles["columns"]}>Terça-Feira</th>
                                                <th className={styles["columns"]}>Quarta-Feira</th>
                                                <th className={styles["columns"]}>Quinta-Feira</th>
                                                <th className={styles["columns"]}>Sexta-Feira</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((row, index) => (
                                                <tr className={styles["table-br"]} key={index}>
                                                    <td>{row.col1}</td>
                                                    <td>{row.col2}</td>
                                                    <td>{row.col3}</td>
                                                    <td>{row.col4}</td>
                                                    <td>{row.col5}</td>
                                                    <td>{row.col6}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                    <p>Professores: Marcia Almeida, Felipe Silva</p>
                                {/* <DataTable value={edits}>
                                    {columns.map((col, i) => (
                                        <Column key={col.field} field={col.field} header={col.header} />
                                    ))}
                                </DataTable> */}
                                <Button>Historico de Edição</Button>
                            </div>
                        </Card>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default DisciplineDetails;

// Adicionar links no nome das disciplinas na lista que redirecionam o usuário para a página de detalhes.

// Implementar a página de detalhes como um pop - up que sobrepõe a lista de disciplinas.

// Exibir na página de detalhes o nome, código, grade de horário, e a opção para visualizar o histórico de edições.

// Implementar a funcionalidade para fechar o pop - up e retornar à lista de disciplinas ao pressionar Esc, clicar em um "x", ou fora do pop - up.

// Realizar testes de interface para garantir que a exibição dos detalhes seja funcional e intuitiva.