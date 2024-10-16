import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';

import { handleFieldChange } from '../../../utils/handlers/handlerUtil';

const inputVisualConfig = `
    align-items-start
    col
    flex
    flex-column
    row-gap-2
`;

const TeacherForm = ({ teacher, setTeacher }) => {
    return (
        <>
            <div className="grid">
                <div className={inputVisualConfig + 'col-12'}>
                    <label htmlFor="teacherName">Nome</label>
                    <InputText
                        className="w-full"
                        id="teacherName"
                        name="teacherName"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        value={teacher.teacherName}
                        placeholder="Digite o nome"
                    />
                    <small id="teacherName-help">Campo do nome do professor</small>
                </div>

                <div className={inputVisualConfig + 'col-5'}>
                    <label htmlFor="teacherBirthDate">Data de Nascimento</label>
                    <InputMask
                        className="w-8rem"
                        id="teacherBirthDate"
                        mask="99/99/9999"
                        name="teacherBirthDate"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        value={teacher.teacherBirthDate}
                        slotChar="dd/mm/aaaa"
                    />
                    <small id="teacherBirthDate-help">Data de nascimento</small>
                </div>
            </div>

                <div className="p-field p-col">
                    <label htmlFor="teacherCPF">CPF</label>
                    <InputMask
                        id="teacherCPF"
                        mask="999.999.999-99"
                        name="teacherCPF"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        value={teacher.teacherCPF}
                    />
                    <small id="teacherCPF-help" className="p-d-block">Campo do CPF</small>
                </div>

                <div className="p-field p-col">
                    <label htmlFor="teacherRG">RG</label>
                    <InputText
                        id="teacherRG"
                        name="teacherRG"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        value={teacher.teacherRG}
                    />
                    <small id="teacherRG-help" className="p-d-block">Campo do RG</small>
                </div>

                <div className="p-field p-col">
                    <label htmlFor="teacherPhoneNumber">Telefone</label>
                    <InputMask
                        id="teacherPhoneNumber"
                        mask="(99) 9 9999-9999"
                        name="teacherPhoneNumber"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        value={teacher.teacherPhoneNumber}
                    />
                    <small id="teacherPhoneNumber-help" className="p-d-block">Número de contato</small>
                </div>

                <div className="p-field p-col">
                    <label htmlFor="teacherEmail">E-mail</label>
                    <InputText
                        id="teacherEmail"
                        name="teacherEmail"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        value={teacher.teacherEmail}
                    />
                    <small id="teacherEmail-help" className="p-d-block">E-mail do professor</small>
                </div>
            
        </>
    );
};

export default TeacherForm;