import GlobalVisualConfig from "../../../utils/configs/GlobalVisualConfig";


const SimpleLayout = ({ children }) => {
    return (
        <main className={GlobalVisualConfig.MAIN + "main-padding"}>
            {children}
        </main>
    );
}

export default SimpleLayout;