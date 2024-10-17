import React from 'react';
import TeacherItem from "../../components/pages/TeacherList/TeacherItem/TeacherItem";

const teachers = [
    ["Rogério Carlos Bastos", "exemplar@gmail.com", "(44) 99999-9999"],
    ["Américo Tomas de Souza", "americano@gmail.com", "(44) 98888-8888"],
    ["Mateus Farias dos Anjos", "farias-matheus@gmail.com", "(44) 97777-7777"],
    ["Rosangela Silveira Mattos", "rosangela-silveira-mattos@gmail.com", "(44) 96666-6666"]
];

const TeacherList = () => {
    return (
        <div className="flex flex-column gap-2">
            {teachers.map((teacher, index) => (
                <TeacherItem
                    key={index}
                    teacherName={teacher[0]}
                    teacherEmail={teacher[1]}
                    teacherPhone={teacher[2]}
                />
            ))}
        </div>
    );
};

export default TeacherList;