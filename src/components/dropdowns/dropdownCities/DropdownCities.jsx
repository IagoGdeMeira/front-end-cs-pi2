import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';
import React, { useState, useEffect } from 'react';


function DropdownCities({ stateId }) {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        if (stateId) {
            axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios?orderBy=nome`)
                .then(response => {
                    const citiesData = response.data.map(city => ({
                        label: city.nome,
                        value: city.id
                    }));
                    setCities(citiesData);
                })
                .catch(error => console.error('Erro ao buscar cidades: ', error));
        } else {
            axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome')
                .then(response => {
                    const citiesData = response.data.map(city => ({
                        label: city.nome,
                        value: city.id
                    }));
                    setCities(citiesData);
                })
                .catch(error => console.error('Erro ao buscar cidades: ', error));
        }
    }, [estadoId]);
}

export default DropdownCities;