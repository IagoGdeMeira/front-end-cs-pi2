import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import React, { useState } from "react";

import { handleFieldChange } from "../../../utils/handlers/globalHandlers";
import { handleCEPChange } from "../js/handlers";
import { inputConfig, labelConfig } from '../js/config';


const AddressForm = ({ address, setAddress }) => {
    const [cep, setCEP] = useState('');
    const handleChange = (e) => handleFieldChange(e, address, setAddress);
    const handleCEPChanges = (e, setCEP) => handleCEPChange(e, setCEP, address, setAddress);

    return (
        <section className="border-top-3 border-600 flex flex-column gap-5">
            <h2 className="text-gray-600">Endereço Residencial</h2>
            <div className="grid">
                <div className={"col-12 sm:col-4" + inputConfig}>
                    <label
                        className={labelConfig}
                        htmlFor="addressCEP"
                    >CEP:</label>
                    <InputMask
                        className="w-full text-overflow-ellipsis"
                        id="addressCEP"
                        mask="99.999-999"
                        name="addressCEP"
                        onChange={(e) => {
                            handleCEPChanges(e, setCEP);
                        }}
                        placeholder="Digite um CEP"
                        value={cep}
                    />
                </div>
                <div className={"col-12 sm:col-2" + inputConfig}>
                    <label
                        className={labelConfig}
                        htmlFor="addressNumber"
                    >Número:</label>
                    <InputNumber
                        className="max-w-full text-overflow-ellipsis"
                        id="addressNumber"
                        name="addressNumber"
                        onChange={(e) => handleChange(e)}
                        useGrouping={false}
                        value={address.addressNumber}
                    />
                </div>
                <div className={"col-12 sm:col-6" + inputConfig}>
                    <label
                        className={labelConfig}
                        htmlFor="addressStreet"
                    >Rua:</label>
                    <InputText
                        className="w-full text-overflow-ellipsis"
                        id="addressStreet"
                        name="addressStreet"
                        onChange={handleChange}
                        placeholder="Digite o nome de uma rua"
                        value={address.addressStreet}
                    />
                </div>
                <div className={"col-12 sm:col" + inputConfig}>
                    <label
                        className={labelConfig}
                        htmlFor="addressNeighborhood"
                    >Bairro:</label>
                    <InputText
                        className="w-full text-overflow-ellipsis"
                        id="addressNeighborhood"
                        name="addressNeighborhood"
                        onChange={handleChange}
                        placeholder="Digite o nome de um bairro"
                        value={address.addressNeighborhood}
                    />
                </div>
                <div className={"col-12 sm:col" + inputConfig}>
                    <label
                        className={labelConfig}
                        htmlFor="addressCity"
                    >Município:</label>
                    <InputText
                        className="w-full text-overflow-ellipsis"
                        id="addressCity"
                        name="addressCity"
                        onChange={handleChange}
                        placeholder="Digite o nome de um município"
                        value={address.addressCity}
                    />
                </div>
            </div>
        </section>
    );
}

export default AddressForm;