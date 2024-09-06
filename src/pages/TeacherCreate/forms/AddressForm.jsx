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
        <>
            
        </>
    );
}

export default AddressForm;