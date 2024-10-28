import { addLocale } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';

import FileUploader from '../FileUploader/FileUploader';

import GlobalVisualConfig from '../../../../utils/configs/GlobalVisualConfig';
import ptBR from '../../../../utils/locales/pt-br.json';


addLocale('pt-br', ptBR);


const FunctionalRegistration = ({
    functionalRegistration,
    handleFileUpload,
    handleFunctionalRegistrationChange,
    handleRemoveFunctionalRegistration,
    index
}) => {
    return (
        <section className={GlobalVisualConfig.FORM_WRAPPED}>
            <div className="align-items-center flex justify-content-end p-2 surface-200">
                <Button
                    icon="pi pi-trash"
                    className="bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600"
                    label=""
                    onClick={handleRemoveFunctionalRegistration}
                    type="button"
                />
            </div>
            <div className="grid p-2">
                <div className={"col-12 sm:col" + GlobalVisualConfig.INPUT}>
                    <label
                        className={GlobalVisualConfig.LABEL}
                        htmlFor="functionalLine"
                    >Linha Funcional:</label>
                    <InputNumber
                        className="w-full text-overflow-ellipsis"
                        id="functionalLine"
                        name="functionalLine"
                        onChange={(e) => handleFunctionalRegistrationChange(e, functionalRegistration.id)}
                        placeholder="Informe a linha funcional"
                        useGrouping={false}
                        value={functionalRegistration.functionalLine}
                    />
                </div>
                <div className={"col-12 sm:col" + GlobalVisualConfig.INPUT}>
                    <label
                        className={GlobalVisualConfig.LABEL}
                        htmlFor="functionalRegistrationLink"
                    >Vínculo:</label>
                    <InputText
                        className="w-full text-overflow-ellipsis"
                        id="functionalRegistrationLink"
                        name="functionalRegistrationLink"
                        onChange={(e) => handleFunctionalRegistrationChange(e, functionalRegistration.id)}
                        placeholder="Informe o vínculo da linha funcional"
                        value={functionalRegistration.functionalRegistrationLink}
                    />
                </div>
                <div className={"col-12" + GlobalVisualConfig.INPUT}>
                    <label
                        className={GlobalVisualConfig.LABEL}
                        htmlFor="functionalRegistrationDiscipline"
                    >Disciplina:</label>
                    <InputNumber
                        className="w-full text-overflow-ellipsis"
                        id="functionalRegistrationDiscipline"
                        name="functionalRegistrationDiscipline"
                        onChange={(e) => handleFunctionalRegistrationChange(e, functionalRegistration.id)}
                        useGrouping={false}
                        placeholder="Informe a disciplina da linha funcional"
                        value={functionalRegistration.functionalLine}
                    />
                </div>       
            </div>
            <FileUploader
                handleFileUpload={handleFileUpload}
                id="fileUpload"
                index={index}
                label="Arquivos da Linha Funcional:"
                name="certificate"
                uploadedFiles={functionalRegistration.uploadedFiles}
            />
        </section>
    );
};

export default FunctionalRegistration;