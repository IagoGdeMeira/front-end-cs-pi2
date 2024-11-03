import { InputText } from 'primereact/inputtext';
import React from 'react';

import GlobalVisualConfig from '../../../../utils/configs/GlobalVisualConfig';


const ListHeader = ({ title, filterText, setFilterText, placeholder="Buscar..." }) => {
    return (
        <header className={GlobalVisualConfig.LIST_HEADER}>
            <h2>{title}</h2>
            <div className="p-input-icon-left w-50">
                <i className="pi pi-search" />
                <InputText
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    placeholder={placeholder}
                    className="w-full"
                />
            </div>
        </header>
    );
};

export default ListHeader;
