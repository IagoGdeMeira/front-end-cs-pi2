import './TeacherList.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';

import ListLayout from "../../components/layouts/ListLayout/ListLayout";
import TeacherItem from "../../components/pages/TeacherList/TeacherItem/TeacherItem";

import PathRoutes from "../../utils/PathRoutes";
import GlobalVisualConfig from '../../utils/configs/GlobalVisualConfig';


const teachers = [
    { id: 1, name: "Rogério Carlos Bastos", email: "exemplar@gmail.com", phone: "(44) 99999-9999", cpf: "000.000.000-00" },
    { id: 2, name: "Américo Tomas de Souza", email: "americano@gmail.com", phone: "(44) 98888-8888", cpf: "111.111.111-11" },
    { id: 3, name: "Mateus Farias dos Anjos", email: "farias-matheus@gmail.com", phone: "(44) 97777-7777", cpf: "222.222.222-22" },
    { id: 4, name: "Rosangela Silveira Mattos", email: "rosangela-silveira-mattos@gmail.com", phone: "(44) 96666-6666", cpf: "333.333.333-33" },
    { id: 5, name: "Ricardo Junior", email: "ricardo-jr@hotmail.com", phone: "(41) 97784-4596", cpf: "555.555.555-55"}
];

const TeacherList = () => {
    const navigate = useNavigate();
    const [filterText, setFilterText] = useState("");
    
    const [filters, setFilters] = useState({
        nameFilter: {checked: true, checkName: "nameFilter", label: "Nome"},
        emailFilter: {checked: false, checkName: "emailFilter", label: "E-mail"},
        phoneFilter: {checked: false, checkName: "phoneFilter", label: "Telefone"}
    });
    
    const sortedTeachers = [...teachers]
        .filter((teacher) => {
            const nameMatch = filters.nameFilter.checked && teacher.name.toLowerCase().includes(filterText.toLowerCase());
            const emailMatch = filters.emailFilter.checked && teacher.email.toLowerCase().includes(filterText.toLowerCase());
            const phoneMatch = filters.phoneFilter.checked && teacher.phone.includes(filterText);

            return nameMatch || emailMatch || phoneMatch;
        }).sort((a, b) => a.name.localeCompare(b.name));

    return (
        <ListLayout
            filters={filters}
            setFilters={setFilters}
            filterText={filterText}
            setFilterText={setFilterText}
            title="Lista de Professores"
        >
            {sortedTeachers.length > 0 ? (
                <div className="flex flex-column gap-2 teacher-list">
                    {sortedTeachers.map((teacher) => (
                        <TeacherItem key={teacher.id} teacher={teacher} />
                    ))}
                </div>
            ) : (
                <div className={GlobalVisualConfig.EMPTY_LIST + "teacher-list"}>
                    <i className={GlobalVisualConfig.EMPTY_LIST_ICON}/>
                    <section className="text-xl">
                        <p>Infelizmente, não pudemos encontrar nenhum resultado correspondente ao que você está buscando.</p>
                        <p>Caso queira, sinta-se livre para cadastrar um novo professor através do botão que está abaixo.</p>
                    </section>
                    <Button
                        label="Cadastrar Novo Professor"
                        icon="pi pi-user-plus"
                        onClick={() => navigate(PathRoutes.NEW_TEACHER)}
                        outlined
                        severity="info"
                    />
                </div>
            )}
        </ListLayout>
    );
};

export default TeacherList;