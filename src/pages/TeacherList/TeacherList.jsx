import './TeacherList.css';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'primereact/button';

import ListLayout from "../../components/layouts/ListLayout/ListLayout";
import TeacherItem from "../../components/pages/TeacherList/TeacherItem/TeacherItem";

import PathRoutes from "../../utils/PathRoutes";
import GlobalVisualConfig from '../../utils/configs/GlobalVisualConfig';
import { teachers } from './js/teacherData';
import EmployeeService from '../../services/EmployeeService';


const TeacherList = () => {
    const navigate = useNavigate();
    const [filterText, setFilterText] = useState("");
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const employeeService = new EmployeeService();

    const [filters, setFilters] = useState({
        nameFilter: { checked: true, checkName: "nameFilter", label: "Nome" },
        emailFilter: { checked: false, checkName: "emailFilter", label: "E-mail" },
        phoneFilter: { checked: false, checkName: "phoneFilter", label: "Telefone" }
    });

    const fetchTeachers = async () => {
        try {
            setLoading(true);
            const data = await employeeService.list();
            console.log(data);
            
            setTeachers(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Erro ao buscar professores:", error);
            setTeachers([]);
        } finally {
            setLoading(false);
        }
    };

    const handleTeacherDeleted = (id) => {
        setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.id !== id));
    };

    useEffect(() => {
        fetchTeachers();
    }, []);

    const sortedTeachers = [...teachers]
        .filter((teacher) => {
            let nameMatch = '';
            if (teacher.name) {
                nameMatch = filters.nameFilter.checked && teacher.name.toLowerCase().includes(filterText.toLowerCase());
            }
            let emailMatch = '';
            if (teacher.email) {
                emailMatch = filters.emailFilter.checked && teacher.email.toLowerCase().includes(filterText.toLowerCase());
            }
            let phoneMatch = '';
            if (teacher.phone) {
                phoneMatch = filters.phoneFilter.checked && teacher.phone.includes(filterText);
            }

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
            {loading ? (
                <div className="text-center">
                    <i className="pi pi-spin pi-spinner text-4xl" />
                    <p>Carregando professores...</p>
                </div>
            ) : sortedTeachers.length > 0 ? (
                <div className="flex flex-column gap-2 teacher-list">
                    {sortedTeachers.map((teacher) => (
                        <TeacherItem key={teacher.id} teacher={teacher} onDelete={handleTeacherDeleted} />
                    ))}
                </div>
            ) : (
                <div className={GlobalVisualConfig.EMPTY_LIST + "teacher-list"}>
                    <i className={GlobalVisualConfig.EMPTY_LIST_ICON} />
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