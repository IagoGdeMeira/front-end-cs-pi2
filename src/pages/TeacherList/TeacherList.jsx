import React from 'react';
import TeacherItem from "../../components/pages/TeacherList/TeacherItem/TeacherItem";


const teachers = [
    { id: 1, name: "Rogério Carlos Bastos", email: "exemplar@gmail.com", phone: "(44) 99999-9999" },
    { id: 2, name: "Américo Tomas de Souza", email: "americano@gmail.com", phone: "(44) 98888-8888" },
    { id: 3, name: "Mateus Farias dos Anjos", email: "farias-matheus@gmail.com", phone: "(44) 97777-7777" },
    { id: 4, name: "Rosangela Silveira Mattos", email: "rosangela-silveira-mattos@gmail.com", phone: "(44) 96666-6666" }
];

const TeacherList = () => {
    return (
        <div className="flex flex-column gap-2">
            {teachers.map((teacher) => (
                <TeacherItem key={teacher.id} teacher={teacher}/>
            ))}
        </div>
    );
};

export default TeacherList;