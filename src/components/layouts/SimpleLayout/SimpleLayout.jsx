import GlobalVisualConfig from "../../../utils/configs/GlobalVisualConfig";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";
import styles from './SimpleLayout.module.css';

const SimpleLayout = ({ children }) => {
    return (
        <main className={styles.mainContainer}>
            <Header />
            <div className={styles.contentContainer}>
                {children}
            </div>
            <Footer />
        </main>
    );
}

export default SimpleLayout;
