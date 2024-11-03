import React from 'react';
import ListHeader from '../../shared/headers/ListHeader/ListHeader';
import GlobalVisualConfig from '../../../utils/configs/GlobalVisualConfig';


const ListLayout = ({
    children,
    filterText,
    setFilterText,
    placeholder,
    title
}) => {
    return (
        <>
            <ListHeader
                filterText={filterText}
                setFilterText={setFilterText}
                placeholder={placeholder}
                title={title}
            />
            <main className={GlobalVisualConfig.MAIN + "main-padding"}>
                {children}
            </main>
        </>
    );
};

export default ListLayout;
