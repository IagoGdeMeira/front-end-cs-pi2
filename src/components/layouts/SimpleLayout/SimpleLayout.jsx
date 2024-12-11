import GlobalVisualConfig from "../../../utils/configs/GlobalVisualConfig";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";


const SimpleLayout = ({ children }) => {
    return (
        <main className={GlobalVisualConfig.MAIN + "main-padding"}>
            {/* <Header /> */}
            {children}
            {/* <Footer/> */}
        </main>
    );
}

export default SimpleLayout;