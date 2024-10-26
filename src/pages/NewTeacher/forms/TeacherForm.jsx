import { addLocale } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import React from 'react';

import { handleFieldChange } from '../../../utils/handlers/globalHandlers';
import { handlePhoneNumberChange } from '../js/handlers';
import { inputConfig, labelConfig } from '../../../utils/visualConfigs/globalVisualConfigs';
import ptBR from '../../../utils/locales/pt-br.json';


addLocale('pt-br', ptBR);

const TeacherForm = ({ teacher, setTeacher, errors }) => {
    const handleChange = (e) => handleFieldChange(e, teacher, setTeacher);
    const handlePhoneChange = (e, fieldName) => handlePhoneNumberChange(e, fieldName, teacher, setTeacher);

    return (
        <>
            <div className={"col" + inputConfig}>
                <label
                    className={labelConfig}
                    htmlFor="teacherName"
                >Nome:</label>
                <InputText
                    className={`text-overflow-ellipsis ${errors.teacherName ? 'p-invalid' : ''}`}
                    id="teacherName"
                    name="teacherName"
                    onChange={(e) => handleChange(e)}
                    placeholder="Digite um nome aqui"
                    value={teacher?.teacherName || ''}
                />
                {errors.teacherName && <small className="p-error">{errors.teacherName}</small>}
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
                    value={teacher?.teacherBirthDate || null}
                />
            </div>
            <div className={"col md:col-6" + inputConfig}>
                <label
                    className={labelConfig}
                    htmlFor="teacherCPF"
                >CPF:</label>
                <InputMask
                    className={`text-overflow-ellipsis ${errors.teacherCPF ? 'p-invalid' : ''}`}
                    id="teacherCPF"
                    mask="999.999.999-99"
                    name="teacherCPF"
                    onChange={(e) => handleChange(e)}
                    placeholder="Digite um CPF aqui"
                    value={teacher?.teacherCPF || ''}
                />
                {errors.teacherCPF && <small className="p-error">{errors.teacherCPF}</small>}
            </div>
            <div className={"col md:col-6" + inputConfig}>
                <label
                    className={labelConfig}
                    htmlFor="teacherRG"
                >RG:</label>
                <InputText
                    className={`text-overflow-ellipsis ${errors.teacherRG ? 'p-invalid' : ''}`}
                    id="teacherRG"
                    name="teacherRG"
                    onChange={(e) => handleChange(e)}
                    placeholder="Digite um RG aqui"
                    value={teacher?.teacherRG || ''}
                />
                {errors.teacherRG && <small className="p-error">{errors.teacherRG}</small>}
            </div>
            <div className={"col md:col-6" + inputConfig}>
                <label
                    className={labelConfig}
                    htmlFor="teacherPhoneNumber"
                >Telefone:</label>
                <InputText
                    className={`text-overflow-ellipsis ${errors.teacherPhoneNumber ? 'p-invalid' : ''}`}
                    id="teacherPhoneNumber"
                    keyfilter="int"
                    name="teacherPhoneNumber"
                    onChange={(e) => handlePhoneChange(e, 'teacherPhoneNumber')}
                    placeholder="Digite um telefone aqui"
                    value={teacher?.teacherPhoneNumber || ''}
                />
                {errors.teacherPhoneNumber && <small className="p-error">{errors.teacherPhoneNumber}</small>}
            </div>
            <div className={"col md:col-6" + inputConfig}>
                <label
                    className={labelConfig}
                    htmlFor="teacherEmail"
                >E-mail:</label>
                <InputText
                    className={`text-overflow-ellipsis ${errors.teacherEmail ? 'p-invalid' : ''}`}
                    id="teacherEmail"
                    name="teacherEmail"
                    onChange={(e) => handleChange(e)}
                    placeholder="Digite um e-mail aqui"
                    value={teacher?.teacherEmail || ''}
                />
                {errors.teacherEmail && <small className="p-error">{errors.teacherEmail}</small>}
            </div>
        </>
    );
};

export default TeacherForm;