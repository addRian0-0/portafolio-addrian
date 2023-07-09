import styles from "../styles/Components.module.scss";

export default function ButtonCV() {
    return (
        <button className={styles.btnCv} >
            <a href={"/Ithan-Flores-CV.pdf"} download>Descargar CV</a>
        </button>
    )
}