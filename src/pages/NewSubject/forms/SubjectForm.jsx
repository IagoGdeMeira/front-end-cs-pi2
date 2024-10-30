import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";

import { handleFieldChange } from "../../../utils/handlers/globalHandlers";
import GlobalVisualConfig from "../../../utils/configs/GlobalVisualConfig";


const SubjectForm = ({ subject, setSubject, errors }) => {
    const handleChange = (e) => handleFieldChange(e, subject, setSubject);

    return(
        <>
            <div className={"col" + GlobalVisualConfig.INPUT}>
                <label
                    className={GlobalVisualConfig.LABEL}
                    htmlFor="subjectName"
                >Nome:</label>
                <InputText
                    className={`text-overflow-ellipsis ${errors.subjectName? 'p-invalid': ''}`}
                    id="subjectName"
                    name="subjectName"
                    onChange={(e) => handleChange(e)}
                    placeholder="Digite o nome da disciplina"
                    value={subject?.subjectName || null}
                />
                {errors.subjectName && <small className="p-error">{errors.subjectName}</small>}
            </div>
            <div className={"col" + GlobalVisualConfig.INPUT}>
                <label
                    className={GlobalVisualConfig.LABEL}
                    htmlFor="subjectCode"
                >Código:</label>
                <InputNumber
                    className={`text-overflow-ellipsis ${errors.subjectCode? 'p-invalid': ''}`}
                    id="subjectCode"
                    name="subjectCode"
                    onChange={(e) => handleChange({ ...e, name: "subjectCode" })}
                    placeholder="Digite o código da disciplina"
                    useGrouping={false}
                    value={subject?.subjectCode || null}
                />
                {errors.subjectCode && <small className="p-error">{errors.subjectCode}</small>}
            </div>
        </>
    );
};

export default SubjectForm;