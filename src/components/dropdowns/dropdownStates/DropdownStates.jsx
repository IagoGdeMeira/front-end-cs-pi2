import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';
import React, { useState, useEffect } from 'react';


const DropdownStates = ({
    className,
    onChange
}) => {
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');

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
            setStates([]);
    }, []);

    const handleStateChange = (e) => {
        setSelectedState(e.value);
        if (onChange) onChange(e);
    };

    return (
        <Dropdown
            className={className}
            emptyMessage="Nenhum estado disponível."
            onChange={handleStateChange}
            options={states}
            value={selectedState}
        />
    );
}

export default DropdownStates;