import { addLocale } from 'primereact/api';
import { useState } from 'react';

import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";
import { RadioButton } from 'primereact/radiobutton';

import FileUploader from '../FileUploader/FileUploader';

import GlobalVisualConfig from '../../../../utils/configs/GlobalVisualConfig';
import ptBR from '../../../../utils/locales/pt-br.json';


addLocale('pt-br', ptBR);

const Specialization = ({
    handleSpecializationChange,
    handleFileUpload,
    handleRemoveSpecialization,
    index,
    specialization
}) => {
    const specializationTypes = [
        { name: "Graduação", key: 'GRADUATION' },
        { name: "Pós-Graduação", key: 'POST_GRADUATE' },
        { name: "Mestrado", key: 'MASTER' },
        { name: "Doutorado", key: 'DOCTORADE' },
    ];

    const [selectedSpecializationType, setSelectedSpecializationType] = useState([]);

    return (
        <section className={GlobalVisualConfig.FORM_WRAPPED}>
            <div className="align-items-center flex justify-content-end p-2 surface-200">
                <Button
                    icon="pi pi-trash"
                    className="bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600"
                    label=""
                    onClick={handleRemoveSpecialization}
                    type="button"
                />
            </div>
            <div className="grid p-2">
                <div className={"col-12 sm:col" + GlobalVisualConfig.INPUT}>
                    <label
                        className={GlobalVisualConfig.LABEL}
                        htmlFor="specializationCourseName"
                    >Nome do curso:</label>
                    <InputText
                        className="w-full text-overflow-ellipsis"
                        id="specializationCourseName"
                        name="specializationCourseName"
                        onChange={(e) => handleSpecializationChange(e, specialization.id)}
                        placeholder="Informe o nome do curso"
                        value={specialization.specializationCourseName}
                    />
                </div>
                <div className={"col-3" + GlobalVisualConfig.INPUT} style={{maxWidth: "180px", minWidth: "175px"}}>
                    <label
                        className={GlobalVisualConfig.LABEL}
                        htmlFor="specializationConclusionDate"
                    >Conclusão:</label>
                    <Calendar
                        dateFormat="dd/mm/yy"
                        id="specializationConclusionDate"
                        locale="pt-br"
                        maxDate={new Date()}
                        name="specializationConclusionDate"
                        onChange={(e) => handleSpecializationChange(e, specialization.id)}
                        showIcon
                        value={specialization.specializationConclusionDate}
                    />
                </div>
                <div className={"col-12" + GlobalVisualConfig.INPUT}>
                    <label
                        className={GlobalVisualConfig.LABEL}
                        htmlFor="specializationCourseLocation"
                    >Local da Especialização:</label>
                    <InputText
                        className="w-full text-overflow-ellipsis"
                        id="specializationCourseLocation"
                        name="specializationCourseLocation"
                        onChange={(e) => handleSpecializationChange(e, specialization.id)}
                        placeholder="Informe o local de realização da especialização"
                        value={specialization.specializationCourseLocation}
                    />
                </div>
                <div className="flex flex-column gap-3 p-4">
                    <h2 className="text-gray-600">Tipo de Especialização</h2>
                    {specializationTypes.map((specializationTypes) => {
                        return (
                            <div className="flex align-items-center" key={specializationTypes.key}>
                                <RadioButton
                                    checked={selectedSpecializationType.key === specializationTypes.key}
                                    inputId={specializationTypes.key}
                                    name="specializationType"
                                    onChange={(e) => {
                                        setSelectedSpecializationType(e.value)
                                        specialization.specializationType = selectedSpecializationType;
                                    }}
                                    severity="info"
                                    value={specializationTypes}
                                />
                                <label
                                    className={GlobalVisualConfig.LABEL + "ml-2"}
                                    htmlFor={specializationTypes.key}
                                >{specializationTypes.name}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
            <FileUploader
                handleFileUpload={(e) => handleFileUpload(e, specialization.id)}
                id="fileUpload"
                index={index}
                label="Arquivos da Especialização:"
                name="certificate"
                uploadedFiles={specialization.uploadedFiles}
            />
        </section>
    );
};

export default Specialization;