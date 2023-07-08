import styles from "../styles/Components.module.scss";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout(
    { children }: { children: React.ReactNode }
) {

    return (
        <>
            <Navbar/>
            <main className={styles.main} >{children}</main>
            <Footer />
        </>
    )

}