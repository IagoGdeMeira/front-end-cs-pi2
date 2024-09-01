import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';
import React, { useState, useEffect } from 'react';


const DropdownCities = ({ stateId }) => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        axios.get(stateId
            ? `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios?orderBy=nome`
            : 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome'
        )
            .then(response => {
                const citiesData = response.data.map(city => ({
                    label: city.nome,
                    value: city.id
                }));
                setCities(citiesData);
            }).catch(error => console.error('Erro ao buscar cidades: ', error));
        }, [stateId]);

    const handleCityChange = (e) => {
        setSelectedCity(e.value);
    };

    return (
        <Dropdown
            onChange={handleCityChange}
            options={cities}
            placeholder="Selecione uma cidade"
            value={selectedCity}
        />
    );
}

export default DropdownCities;