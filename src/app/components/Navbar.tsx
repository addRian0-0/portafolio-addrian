import ButtonCV from "./ButtonCV";
import styles from "../styles/Components.module.scss";

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div><h1>Ithan Flores <span> - Inicio</span> </h1></div>
            <div>
                <ul className={styles.menu} >
                    <li>Acerca</li>
                    <li>Habilidades</li>
                    <li>Proyectos</li>
                    <li>Contactame</li>
                    <li><ButtonCV /></li>
                </ul>
            </div>
        </header>
    )
}