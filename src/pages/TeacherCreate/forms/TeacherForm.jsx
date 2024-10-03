import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';

import { handleFieldChange } from '../../../utils/handlers/handlerUtil';


const TeacherForm = ({ teacher, setTeacher }) => {
    return (
        <div className="teacher-form">
            <div className="form-row flex">
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="teacherName">Nome do Professor:</label>
                    <InputText
                        aria-describedby="teacherName-help"
                        className="w-full text-overflow-ellipsis"
                        id="teacherName"
                        name="teacherName"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        value={teacher.teacherName}
                    />
                    <small id="teacherName-help">Campo do nome do professor.</small>
                </div>

                <div className="w-9rem form-item-date flex flex-column align-items-start">
                    <label htmlFor="teacherBirthDate">Nascido em:</label>
                    <InputMask
                        aria-describedby="teacherBirthDate-help"
                        className="w-full text-overflow-ellipsis"
                        id="teacherBirthDate"
                        mask="99/99/9999"
                        name="teacherBirthDate"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        slotChar="dd/mm/aaaa"
                        value={teacher.teacherBirthDate}
                    />
                    <small id="teacherBirthDate-help">Data de nascimento.</small>
                </div>
            </div>

            <div className="form-row flex">
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="teacherCPF">CPF do Professor:</label>
                    <InputMask
                        aria-describedby="teacherCPF-help"
                        className="w-full text-overflow-ellipsis"
                        id="teacherCPF"
                        mask="999.999.999-99"
                        name="teacherCPF"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        value={teacher.teacherCPF}
                    />
                    <small id="teacherCPF-help">Campo do CPF do professor.</small>
                </div>

                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="teacherRG">RG do Professor:</label>
                    <InputText
                        aria-describedby="teacherRG-help"
                        className="w-full text-overflow-ellipsis"
                        id="teacherRG"
                        name="teacherRG"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        value={teacher.teacherRG}
                    />
                    <small id="teacherRG-help">Campo do RG do professor.</small>
                </div>
            </div>

            <div className="form-row flex">
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="teacherPhoneNumber">Telefone do Professor:</label>
                    <InputMask
                        aria-describedby="teacherPhoneNumber-help"
                        className="w-full text-overflow-ellipsis"
                        id="teacherPhoneNumber"
                        mask="(99) 9 9999-9999"
                        name="teacherPhoneNumber"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        value={teacher.teacherPhoneNumber}
                    />
                    <small id="teacherPhoneNumber-help">Campo do número de contato do professor.</small>
                </div>

                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="teacherEmail">E-mail do Professor:</label>
                    <InputText
                        aria-describedby="teacherEmail-help"
                        className="w-full text-overflow-ellipsis"
                        id="teacherEmail"
                        name="teacherEmail"
                        onChange={(e) => handleFieldChange(e, teacher, setTeacher)}
                        value={teacher.teacherEmail}
                    />
                    <small id="teacherEmail-help">Campo do e-mail do professor.</small>
                </div>
            </div>
        </div>
    );
};

export default TeacherForm;