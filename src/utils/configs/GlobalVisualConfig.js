class GlobalVisualConfig {
    static CANCEL_BUTTON = `
        bg-red-400
        border-red-400
        hover:bg-red-600
        hover:border-red-600
    `;

    static FORM = `
        bg-bluegray-100
        border-noround
        grid
        md:px-4
        px-1
        py-3
        sm:border-round-lg
    `;

    static FORM_WRAPPED = `
        border-2
        border-200
        border-round-lg
        flex
        flex-column
        surface-100
    `;

    static INPUT = `
        flex
        flex-column
        gap-1
        text-left
    `;

    static LABEL = `
        font-bold
        text-gray-600
    `;

    static LIST_HEADER = `
        align-items-center
        justify-content-between 
        p-3
        surface-100
    `;

    static LIST_ITEM = `
        border-round-xl
        p-2
        surface-200
        text-gray-600
        w-full
    `;

    static LIST_ITEM_CONTENT = `
        flex
        flex-row
        gap-4
        justify-content-between
        w-full
    `;

    static LIST_ITEM_INFO = `
        flex
        flex-column
        flex-wrap
        justify-content-around
        p-2
        text-left
    `;

    static MAIN = `
        flex
        justify-content-center
    `;

    static SAVE_BUTTON = `
        bg-yellow-400
        border-yellow-400
        hover:bg-yellow-600
        hover:border-yellow-600
    `;
}

export default GlobalVisualConfig;