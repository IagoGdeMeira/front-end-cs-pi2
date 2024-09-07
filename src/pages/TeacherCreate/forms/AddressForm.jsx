import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import React, { useState } from "react";

import {
    handleAddressCEPChange
} from "../handlers/addressHandlers";


const AddressForm = () => {
    const [cep, setCEP] = useState('');
    const [address, setAddress] = useState({
        addressStreet: '',
        addressNumber: '',
        addressNeighborhood: '',
        addressCity: ''
    });

    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Endereço Residencial</h2>
            <div className="form-row flex">
                {/* Campo do CEP do endereço residencial */}
                <div className="w-5rem form-item-wh-input flex flex-column align-items-start">
                    <label htmlFor="addressCEP">CEP:</label>
                    <InputMask
                        aria-describedby="addressCEP-help"
                        className="w-full text-overflow-ellipsis"
                        id="addressCEP"
                        mask="99999-999"
                        onChange={(e) => handleAddressCEPChange(e, setCEP, teacher, setTeacher)}
                        value={cep}
                    />
                    <small id="addressCEP-help">CEP residencial</small>
                </div>

                {/* Campo para o ESTADO NATAL do professor */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="teacherBirthState">Estado Natal:</label>
                    <DropdownStates
                        className="w-full text-left white-space-nowrap overflow-hidden text-overflow-clip"
                        id="TeacherBirthState"
                        onChange={(e) => {
                            setSelectedState(e.value);
                            handleBirthStateChange(e.value, teacher, setTeacher);
                        }}
                    />
                    <small id="teacherBirthState-help">Campo do estado natal do professor.</small>
                </div>

                {/* Campo para a CIDADE NATAL do professor */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="teacherBirthCity">Cidade Natal:</label>
                    <DropdownCities
                        className="w-full text-left white-space-nowrap overflow-hidden text-overflow-clip"
                        id="TeacherBirthCity"
                        onChange={(e) => handleBirthCityChange(e.value, teacher, setTeacher)}
                        stateId={selectedState}
                    />
                    <small id="teacherBirthCity-help">Campo da cidade natal do professor.</small>
                </div>

                
            </div>
        </section>
    );
}

export default AddressForm;