import './FilterDropdown.css';

import React from 'react';
import { MultiSelect } from 'primereact/multiselect';


const FilterDropdown = ({ filters, setFilters }) => {
    const options = Object.entries(filters).map(([key, filter]) => ({
        label: filter.label,
        value: key
    }));

    const selectedFilters = Object.keys(filters).filter(key => filters[key].checked);

    const handleFilterChange = (selectedValues) => {
        const updatedFilters = { ...filters };
        Object.keys(updatedFilters).forEach(key => {
            updatedFilters[key].checked = selectedValues.includes(key);
        });
        setFilters(updatedFilters);
    };

    return (
        <MultiSelect
            className="w-min no-placeholder"
            display="chip"
            value={selectedFilters}
            options={options}
            onChange={(e) => handleFilterChange(e.value)}
            panelClassName="no-options-display"
            placeholder=""
        />
    );
};

export default FilterDropdown;