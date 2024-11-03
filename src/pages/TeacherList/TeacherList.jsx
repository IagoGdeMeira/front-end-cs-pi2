import './TeacherList.css';

import React, { useState } from 'react';

import ListLayout from "../../components/layouts/ListLayout/ListLayout";
import TeacherItem from "../../components/pages/TeacherList/TeacherItem/TeacherItem";


const teachers = [
    { id: 1, name: "Rogério Carlos Bastos", email: "exemplar@gmail.com", phone: "(44) 99999-9999", cpf: "000.000.000-00" },
    { id: 2, name: "Américo Tomas de Souza", email: "americano@gmail.com", phone: "(44) 98888-8888", cpf: "111.111.111-11" },
    { id: 3, name: "Mateus Farias dos Anjos", email: "farias-matheus@gmail.com", phone: "(44) 97777-7777", cpf: "222.222.222-22" },
    { id: 4, name: "Rosangela Silveira Mattos", email: "rosangela-silveira-mattos@gmail.com", phone: "(44) 96666-6666", cpf: "333.333.333-33" },
    { id: 5, name: "Ricardo Junior", email: "ricardo-jr@hotmail.com", phone: "(41) 97784-4596", cpf: "555.555.555-55"}
];

const TeacherList = () => {
    const [filterText, setFilterText] = useState("");
    const sortedTeachers = [...teachers]
        .filter(teacher => teacher.name.toLowerCase().includes(filterText.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <ListLayout
            title="Lista de Professores"
            filterText={filterText}
            setFilterText={setFilterText}
            placeholder="Buscar por nome"
        >
            <div className="flex flex-column gap-2 teacher-list">
                {sortedTeachers.map((teacher) => (
                    <TeacherItem key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </ListLayout>
    );
};

export default TeacherList;