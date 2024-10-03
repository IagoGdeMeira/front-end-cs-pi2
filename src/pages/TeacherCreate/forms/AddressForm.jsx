import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import React, { useState } from "react";

import { handleFieldChange } from "../../../utils/handlers/handlerUtil";


const AddressForm = ({ teacherAddress, setTeacherAddress }) => {
    const [cep, setCEP] = useState('');

    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Endereço Residencial</h2>
            <div className="form-row flex">
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="addressCEP">CEP:</label>
                    <InputMask
                        aria-describedby="addressCEP-help"
                        className="w-full text-overflow-ellipsis"
                        id="addressCEP"
                        mask="99.999-999"
                        name="addressCEP"
                        onChange={(e) => handleFieldChange(e, setCEP, teacherAddress, setTeacherAddress)}
                        value={cep}
                    />
                    <small id="addressCEP-help">CEP residencial.</small>
                </div>

                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="addressNumber">Número:</label>
                    <InputNumber
                        aria-describedby="addressNumber-help"
                        className="w-full text-overflow-ellipsis"
                        id="addressNumber"
                        name="addressNumber"
                        onChange={(e) => handleFieldChange(e.value, teacherAddress, setTeacherAddress)}
                        useGrouping={false}
                        value={teacherAddress.addressNumber}
                    />
                    <small id="addressNumber-help">Nº residencial.</small>
                </div>
            </div>

            <div className="form-row flex">
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="addressStreet">Rua:</label>
                    <InputText
                        aria-describedby="addressStreet-help"
                        className="w-full text-overflow-ellipsis"
                        id="addressStreet"
                        name="addressStreet"
                        onChange={(e) => handleFieldChange(e, teacherAddress, setTeacherAddress)}
                        value={teacherAddress.addressStreet}
                    />
                    <small id="addressStreet-help">Campo da rua residencial.</small>
                </div>
            </div>

            <div className="form-row flex">
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="addressNeighborhood">Bairro:</label>
                    <InputText
                        aria-describedby="addressNeighborhood-help"
                        className="w-full"
                        id="addressNeighborhood"
                        name="addressNeighborhood"
                        onChange={(e) => handleFieldChange(e, teacherAddress, setTeacherAddress)}
                        value={teacherAddress.addressNeighborhood}
                    />
                    <small id="addressNeighborhood-help">Campo do bairro residencial.</small>
                </div>

                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="addressCity">Cidade:</label>
                    <InputText
                        aria-describedby="addressCity-help"
                        className="w-full"
                        id="addressCity"
                        name="addressCity"
                        onChange={(e) => handleFieldChange(e, teacherAddress, setTeacherAddress)}
                        value={teacherAddress.addressCity}
                    />
                    <small id="addressCity-help">Campo da cidade residencial.</small>
                </div>
            </div>
        </section>
    );
}

export default AddressForm;