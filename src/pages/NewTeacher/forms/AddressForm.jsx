import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import React, { useEffect, useState } from "react";

import { handleFieldChange } from "../../../utils/handlers/globalHandlers";
import { handleCEPChange } from "../js/handlers";
import GlobalVisualConfig from '../../../utils/configs/GlobalVisualConfig';


const AddressForm = ({ address, setAddress }) => {
    const [cep, setCEP] = useState('');
    const handleChange = (e) => handleFieldChange(e, address, setAddress);
    const handleCEPChanges = (e, setCEP) => handleCEPChange(e, setCEP, address, setAddress);

    useEffect(() =>{
        console.log(address.addressCEP);
        
        setCEP(address.addressCEP);
        console.log('cep:', cep);
        
    }, [address])

    return (
        <section className="border-top-3 border-600 flex flex-column gap-5">
            <h2 className="text-gray-600">Endereço Residencial</h2>
            <div className="grid">
                <div className={"col-12 sm:col-4" + GlobalVisualConfig.INPUT}>
                    <label
                        className={GlobalVisualConfig.LABEL}
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
                <div className={"col-12 sm:col-2" + GlobalVisualConfig.INPUT}>
                    <label
                        className={GlobalVisualConfig.LABEL}
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
                <div className={"col-12 sm:col-6" + GlobalVisualConfig.INPUT}>
                    <label
                        className={GlobalVisualConfig.LABEL}
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
                <div className={"col-12 sm:col" + GlobalVisualConfig.INPUT}>
                    <label
                        className={GlobalVisualConfig.LABEL}
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
                <div className={"col-12 sm:col" + GlobalVisualConfig.INPUT}>
                    <label
                        className={GlobalVisualConfig.LABEL}
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