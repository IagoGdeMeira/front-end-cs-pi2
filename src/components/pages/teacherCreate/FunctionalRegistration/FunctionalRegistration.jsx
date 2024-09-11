import "./FunctionalRegistration.css";

import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from "primereact/inputtext";


const FunctionalRegistration = ({
    functionalRegistration,
    handleRemoveFunctionalRegistration,
    index,
    handleFunctionalRegistrationChange
}) => {
    return (
        <section className="degree-section flex flex-column surface-100 border-2 border-200">
            <div className="degree-header flex justify-content-between align-items-center surface-200">
                <h3>Registro Funcional {index + 1}</h3>
                <Button
                    icon="pi pi-trash"
                    className="fc-remove bg-red-500 border-red-500"
                    label=""
                    onClick={handleRemoveFunctionalRegistration}
                    type="button"
                />
            </div>

            <div className="form-row flex">
                {/* Campo para a LINHA FUNCIONAL. */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="functionalLine">Linha Funcional:</label>
                    <InputNumber
                        aria-describedby="functionalLine-help"
                        className="w-full text-overflow-ellipsis"
                        id="functionalLine"
                        onChange={(e) => handleFunctionalRegistrationChange(e, index)}
                        name="functionalLine"
                        useGrouping={false}
                        value={functionalRegistration.functionalLine}
                    />
                    <small id="functionalLine-help">Campo da linha funcional.</small>
                </div>

                {/* Campo para o VÍNCULO do registro funcional. */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="functionalRegistrationLink">Vínculo:</label>
                    <InputText
                        aria-describedby="functionalRegistrationLink-help"
                        className="w-full text-overflow-ellipsis"
                        id="functionalRegistrationLink"
                        onChange={(e) => handleFunctionalRegistrationChange(e, index)}
                        name="functionalRegistrationLink"
                        value={functionalRegistration.functionalRegistrationLink}
                    />
                    <small id="specializationConclusionDate-help">Campo do vínculo do registro.</small>
                </div>
            </div> 

            <div className="form-row flex">
                {/* Campo para a LINHA FUNCIONAL. */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="functionalRegistrationDiscipline">Disciplina:</label>
                    <InputNumber
                        aria-describedby="functionalRegistrationDiscipline-help"
                        className="w-full text-overflow-ellipsis"
                        id="functionalRegistrationDiscipline"
                        onChange={(e) => handleFunctionalRegistrationChange(e, index)}
                        name="functionalRegistrationDiscipline"
                        useGrouping={false}
                        value={functionalRegistration.functionalLine}
                    />
                    <small id="functionalRegistrationDiscipline-help">Campo da disciplina de concurso.</small>
                </div>       
            </div>
        </section>
    );
};

export default FunctionalRegistration;