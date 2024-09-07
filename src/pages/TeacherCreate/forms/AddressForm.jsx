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
                
            </div>
        </section>
    );
}

export default AddressForm;