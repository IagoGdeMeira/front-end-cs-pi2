import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";

import { handleFieldChange } from "../../../utils/handlers/globalHandlers";
import GlobalVisualConfig from "../../../utils/configs/GlobalVisualConfig";


const DisciplineForm = ({ discipline, setDiscipline, errors }) => {
    const handleChange = (e) => handleFieldChange(e, discipline, setDiscipline);

    return(
        <>
            <div className={"col" + GlobalVisualConfig.INPUT}>
                <label
                    className={GlobalVisualConfig.LABEL}
                    htmlFor="disciplineName"
                >Nome:</label>
                <InputText
                    className={`text-overflow-ellipsis ${errors.disciplineName ? 'p-invalid' : ''}`}
                    id="disciplineName"
                    name="disciplineName"
                    onChange={(e) => handleChange(e)}
                    placeholder="Digite o nome da disciplina"
                    value={discipline?.disciplineName || null}
                />
            </div>
            <div className={"col" + GlobalVisualConfig.INPUT}>
                <label
                    className={GlobalVisualConfig.LABEL}
                    htmlFor="disciplineCode"
                >Código:</label>
                <InputNumber
                    className={`text-overflow-ellipsis ${errors.disciplineCode ? 'p-invalid' : ''}`}
                    id="disciplineCode"
                    name="disciplineCode"
                    onChange={(e) => handleChange(e)}
                    placeholder="Digite o código da disciplina"
                    useGrouping={false}
                    value={discipline?.disciplineCode || null}
                />
            </div>
        </>
    );
};

export default DisciplineForm;