import { addLocale } from 'primereact/api';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";

import {
    cardConfig,
    inputConfig,
    labelConfig
} from "../../../../pages/TeacherCreate/js/config";
import FileUploader from '../FileUploader/FileUploader';
import { handleFileUpload } from '../../../../pages/TeacherCreate/js/handlers';
import ptBR from '../../../../utils/locales/pt-br.json';


addLocale('pt-br', ptBR);

const Specialization = ({
    handleRemoveSpecialization,
    handleSpecializationChange,
    index,
    specialization
}) => {
    return (
        <section className={cardConfig}>
            <div className="align-items-center flex justify-content-between p-2 surface-200">
                <h3 className="text-gray-600">Especialização {index + 1}</h3>
                <Button
                    icon="pi pi-trash"
                    className="bg-red-500 border-red-500"
                    label=""
                    onClick={handleRemoveSpecialization}
                    type="button"
                />
            </div>
            <div className="grid p-2">
                <div className={"col-12 sm:col" + inputConfig}>
                    <label
                        className={labelConfig}
                        htmlFor="specializationCourseName"
                    >Nome do curso:</label>
                    <InputText
                        className="w-full text-overflow-ellipsis"
                        id="specializationCourseName"
                        name="specializationCourseName"
                        onChange={(e) => handleSpecializationChange(e, index)}
                        placeholder="Informe o nome do curso"
                        value={specialization.specializationCourseName}
                    />
                </div>
                <div className={"col-3" + inputConfig} style={{maxWidth: "180px", minWidth: "175px"}}>
                    <label
                        className={labelConfig}
                        htmlFor="specializationConclusionDate"
                    >Conclusão:</label>
                    <Calendar
                        dateFormat="dd/mm/yy"
                        id="specializationConclusionDate"
                        locale=""
                        maxDate={new Date()}
                        name="specializationConclusionDate"
                        onChange={(e) => handleSpecializationChange(e, index)}
                        showIcon
                        value={specialization.specializationConclusionDate}
                    />
                </div>
                <div className={"col-12" + inputConfig}>
                    <label
                        className={labelConfig}
                        htmlFor="specializationCourseLocation"
                    >Local da Especialização:</label>
                    <InputText
                        className="w-full text-overflow-ellipsis"
                        id="specializationCourseLocation"
                        name="specializationCourseLocation"
                        onChange={(e) => handleSpecializationChange(e, index)}
                        placeholder="Informe o local de realização da especialização"
                        value={specialization.specializationCourseLocation}
                    />
                </div>
            </div>
            <FileUploader
                label="Arquivos da Especialização:"
                id="fileUpload"
                uploadedFiles={specialization.uploadedFiles}
                handleFileUpload={handleFileUpload}
                index={index}
                name="certificate"
            />
        </section>
    );
};

export default Specialization;