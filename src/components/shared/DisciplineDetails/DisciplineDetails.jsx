import styles from "./DisciplineDetails.module.css"

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";


const DisciplineDetails = ({ onClose }) =>{
    const [edits, setEdits] = useState([]);

    const colluns = [
        {field: 'idModifier', header: 'Id de modificação'},
        {field: 'pesonModified', header: 'Pessoa'},
        {field: 'modified', header: "Modificação"}
    ]

    let [dialogVisible, setDialogVisible] = useState(false);

    const data = [
        { col1: '1ª AULA 7:30 AS 8:20', col2: 'Matemática', col3: '', col4: '', col5: 'Matemática', col6: '' },
        { col1: '2ª AULA 8:20 AS 9:10', col2: 'Matemática', col3: 'Matemática', col4: '', col5: 'Matemática', col6: '' },
        { col1: '3ª AULA 9:10 AS 10:00', col2: '', col3: '', col4: 'Matemática', col5: '', col6: '' },
        { col1: 'INTERVALO 10:00 AS 10:20', col2: 'INTERVALO', col3: 'INTERVALO', col4: 'INTERVALO', col5: 'INTERVALO', col6: 'INTERVALO' },
        { col1: '4ª AULA 10:20 AS 11:10', col2: '', col3: 'Matemática', col4: '', col5: '', col6: 'Matemática' },
        { col1: '5ª AULA 11:10 AS 12:00', col2: '', col3: 'Matemática', col4: '', col5: '', col6: 'Matemática' }
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
                                <h1 className={styles['dicsipline']}>Matemática - 1265</h1>
                                <p>Professores: Marcia Almeida, Felipe Silva</p>
                                <div  className={styles["table-container"]}>
                                    <table className={styles["table"]} border="1">
                                        <thead>
                                            <tr>
                                                <th className={styles["columns"]}>Horarios</th>
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