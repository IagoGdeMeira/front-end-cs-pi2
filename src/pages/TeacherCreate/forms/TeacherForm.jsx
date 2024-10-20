import { addLocale } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import React from 'react';

import { handleFieldChange } from '../../../utils/handlers/handlerUtil';
import { inputConfig, labelConfig } from '../js/config';
import ptBR from '../../../utils/locales/pt-br.json';


addLocale('pt-br', ptBR);

const TeacherForm = ({ teacher, setTeacher }) => {
    const handleChange = (e) => handleFieldChange(e, teacher, setTeacher);

    return (
        <>
            <div className={"col" + inputConfig}>
                <label
                    className={labelConfig}
                    htmlFor="teacherName"
                >Nome:</label>
                <InputText
                    className="text-overflow-ellipsis"
                    id="teacherName"
                    name="teacherName"
                    onChange={(e) => handleChange(e)}
                    placeholder="Digite um nome aqui"
                    value={teacher.teacherName}
                />
            </div>
            <div className={"col-12 sm:col-3" + inputConfig} style={{maxWidth: "180px", minWidth: "175px"}}>
                <label
                    className={labelConfig + "text-overflow-ellipsis"}
                    htmlFor="teacherBirthDate"
                >Nascido em:</label>
                <Calendar
                    dateFormat="dd/mm/yy"
                    id="teacherBirthDate"
                    locale="pt-br"
                    maxDate={new Date()}
                    name="teacherBirthDate"
                    onChange={(e) => handleChange(e)}
                    showIcon
                    value={teacher.teacherBirthDate}
                />
            </div>
            <div className={"col md:col-6" + inputConfig}>
                <label
                    className={labelConfig + "text-overflow-ellipsis"}
                    htmlFor="teacherCPF"
                >CPF:</label>
                <InputMask
                    id="teacherCPF"
                    mask="999.999.999-99"
                    name="teacherCPF"
                    onChange={(e) => handleChange(e)}
                    placeholder="Digite um CPF aqui"
                    value={teacher.teacherCPF}
                />
            </div>
            <div className={"col md:col-6" + inputConfig}>
                <label
                    className={labelConfig}
                    htmlFor="teacherRG"
                >RG:</label>
                <InputText
                    className="text-overflow-ellipsis"
                    id="teacherRG"
                    name="teacherRG"
                    onChange={(e) => handleChange(e)}
                    placeholder="Digite um RG aqui"
                    value={teacher.teacherRG}
                />
            </div>
            <div className={"col md:col-6" + inputConfig}>
                <label
                    className={labelConfig}
                    htmlFor="teacherPhoneNumber"
                >Telefone:</label>
                <InputMask
                    className="text-overflow-ellipsis"
                    id="teacherPhoneNumber"
                    mask="(99) 9 9999-9999"
                    name="teacherPhoneNumber"
                    onChange={(e) => handleChange(e)}
                    placeholder="Digite um telefone aqui"
                    value={teacher.teacherPhoneNumber}
                />
            </div>
            <div className={"col md:col-6" + inputConfig}>
                <label
                    className={labelConfig}
                    htmlFor="teacherEmail"
                >E-mail:</label>
                <InputText
                    className="text-overflow-ellipsis"
                    id="teacherEmail"
                    name="teacherEmail"
                    onChange={(e) => handleChange(e)}
                    placeholder="Digite um e-mail aqui"
                    value={teacher.teacherEmail}
                />
            </div>
        </>
    );
};

export default TeacherForm;