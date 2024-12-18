import React from 'react';
import ListHeader from '../../shared/headers/ListHeader/ListHeader';
import GlobalVisualConfig from '../../../utils/configs/GlobalVisualConfig';
import styles from './ListLayout.module.css';

const ListLayout = ({
    children,
    filters,
    setFilters,
    filterText,
    setFilterText,
    placeholder,
    title
}) => {
    return (
        <div className={styles.listContainer}>
            <ListHeader
                filters={filters}
                setFilters={setFilters}
                filterText={filterText}
                setFilterText={setFilterText}
                placeholder={placeholder}
                title={title}
            />
            <main className={styles.listContent}>
                {children}
            </main>
        </div>
    );
};

export default ListLayout;
