import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from 'primereact/inputtext';
import React from 'react';

import FilterDropdown from "./FilterDropdown/FilterDropdown";
import GlobalVisualConfig from '../../../../utils/configs/GlobalVisualConfig';


const ListHeader = ({
    filters,
    setFilters,
    filterText,
    setFilterText,
    placeholder="Buscar...",
    title
}) => {
    const handleFilterChange = (e) => {
        const { name, checked } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: { ...prevFilters[name], checked }
        }));
    };

    return (
        <header className={GlobalVisualConfig.LIST_HEADER}>
            <h2 className="text-gray-600">{title}</h2>
            <div className="flex gap-2 justify-content-center w-full">
                <IconField className="w-30rem" iconPosition="left">
                    <InputIcon className="pi pi-search"/>
                    <InputText
                        className="w-full"
                        onChange={(e) => setFilterText(e.target.value)}
                        placeholder={placeholder}
                        value={filterText}
                    />
                </IconField>
                <FilterDropdown filters={filters} setFilters={setFilters} />
            </div>
        </header>
    );
};

export default ListHeader;