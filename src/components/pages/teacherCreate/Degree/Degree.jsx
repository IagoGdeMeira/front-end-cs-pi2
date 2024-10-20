import './Degree.css';

import { addLocale } from 'primereact/api';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';

import {
    cardConfig,
    inputConfig,
    labelConfig 
} from '../../../../pages/TeacherCreate/js/config';
import ptBR from '../../../../utils/locales/pt-br.json';


addLocale('pt-br', ptBR);

const Degree = ({
    degree,
    handleDegreeChange,
    handleRemoveDegree,
    index
}) => {
    return (
        <section className={cardConfig}>
            <div className="align-items-center flex justify-content-between p-2 surface-200">
                <h3 className="text-gray-600">Graduação {index + 1}</h3>
                <Button
                    icon="pi pi-trash"
                    className="bg-red-500 border-red-500"
                    label=""
                    onClick={handleRemoveDegree}
                    type="button"
                />
            </div>
            <div className="grid p-2">
                <div className={"col-12 sm:col" + inputConfig}>
                    <label
                        className={labelConfig}
                        htmlFor="degreeCourseName"
                    >Nome do curso:</label>
                    <InputText
                        className="w-full text-overflow-ellipsis"
                        id="degreeCourseName"
                        name="degreeCourseName"
                        onChange={(e) => handleDegreeChange(e, index)}
                        placeholder="Informe o nome do curso"
                        value={degree.degreeCourseName}
                    />
                </div>
                <div className={"col-3" + inputConfig} style={{maxWidth: "180px", minWidth: "175px"}}>
                    <label
                        className={labelConfig}
                        htmlFor="degreeConclusionDate"
                    >Conclusão:</label>
                    <Calendar
                        dateFormat="dd/mm/yy"
                        id="degreeConclusionDate"
                        locale="pt-br"
                        maxDate={new Date()}
                        name="degreeConclusionDate"
                        onChange={(e) => handleDegreeChange(e, index)}
                        showIcon
                        value={degree.degreeConclusionDate}
                    />
                </div>
                <div className={"col-12" + inputConfig}>
                    <label
                        className={labelConfig}
                        htmlFor="degreeCourseLocation"
                    >Local da Graduação:</label>
                    <InputText
                        className="w-full text-overflow-ellipsis"
                        id="degreeCourseLocation"
                        name="degreeCourseLocation"
                        onChange={(e) => handleDegreeChange(e, index)}
                        placeholder="Informe o local de realização da graduação"
                        value={degree.degreeCourseLocation}
                    />
                </div>
            </div>
        </section>
    );
};

export default Degree;