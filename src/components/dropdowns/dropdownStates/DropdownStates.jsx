import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';
import React, { useState, useEffect } from 'react';


function DropdownStates({ onStateChange }) {
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState(null);

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
            .then(response => {
                const statesData = response.data.map(state => ({
                    label: state.nome,
                    value: state.id
                }));
                setStates(statesData);
            })
            .catch(error => console.error('Erro ao buscar estados: ', error));
    }, []);

    const handleStateChange = (e) => {
        setSelectedState(e.value);
        onStateChange(e.value);
    };

    return (
        <Dropdown
            className="input-width"
            onChange={handleStateChange}
            options={states}
            placeholder="Selecione um estado"
            value={selectedState}
        />
    );
}

export default DropdownStates;