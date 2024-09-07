import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import React, { useState } from "react";

import {
    handleAddressCEPChange,
    handleAddressNumberChange,
    handleAddressStreetChange,
    handleAddressNeighborhoodChange,
    handleAddressCityChange
} from "../handlers/addressHandlers";


const AddressForm = ({ teacherAddress, setTeacherAddress }) => {
    const [cep, setCEP] = useState('');
    const [address, setAddress] = useState({
        addressStreet: '',
        addressNumber: '',
        addressNeighborhood: '',
        addressCity: ''
    });

    [teacherAddress, setTeacherAddress] = [address, setAddress];

    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Endereço Residencial</h2>
            <div className="form-row flex">
                {/* Campo do CEP do endereço residencial */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="addressCEP">CEP:</label>
                    <InputMask
                        aria-describedby="addressCEP-help"
                        className="w-full text-overflow-ellipsis"
                        id="addressCEP"
                        mask="99.999-999"
                        onChange={(e) => handleAddressCEPChange(e, setCEP, address, setAddress)}
                        value={cep}
                    />
                    <small id="addressCEP-help">CEP residencial.</small>
                </div>

                {/* Campo do NÚMERO DA RESIDÊNCIA do professor */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="addressNumber">Número:</label>
                    <InputText
                        aria-describedby="addressNumber-help"
                        className="w-full text-overflow-ellipsis"
                        id="addressNumber"
                        onChange={(e) => handleAddressNumberChange(e, address, setAddress)}
                        value={address.addressNumber}
                    />
                    <small id="addressNumber-help">Nº residencial.</small>
                </div>
            </div>

            <div className="form-row flex">
                {/* Campo da RUA do endereço residencial */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="addressStreet">Rua:</label>
                    <InputText
                        aria-describedby="addressStreet-help"
                        className="w-full text-overflow-ellipsis"
                        id="addressStreet"
                        onChange={(e) => handleAddressStreetChange(e, address, setAddress)}
                        value={address.addressStreet}
                    />
                    <small id="addressStreet-help">Campo da rua residencial.</small>
                </div>
            </div>

            <div className="form-row flex">
                {/* Campo para o BAIRRO residencial. */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="addressNeighborhood">Bairro:</label>
                    <InputText
                        aria-describedby="addressNeighborhood-help"
                        className="w-full"
                        id="addressNeighborhood"
                        onChange={(e) => handleAddressNeighborhoodChange(e, address, setAddress)}
                        value={address.addressNeighborhood}
                    />
                    <small id="addressNeighborhood-help">Campo do bairro residencial.</small>
                </div>

                {/* Campo para a CIDADE residencial. */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="addressCity">Cidade:</label>
                    <InputText
                        aria-describedby="addressCity-help"
                        className="w-full"
                        id="addressCity"
                        onChange={(e) => handleAddressCityChange(e, address, setAddress)}
                        value={address.addressCity}
                    />
                    <small id="addressCity-help">Campo da cidade residencial.</small>
                </div>
            </div>
        </section>
    );
}

export default AddressForm;