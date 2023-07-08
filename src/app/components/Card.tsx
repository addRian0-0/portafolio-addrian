import styles from "../styles/Components.module.scss";

interface Props {
    title: string;
    description: string;
    lista: string[];
    linkApp: string;
    linkrepo?: string;
}

export default function Card({ title, description, lista, linkApp, linkrepo }: Props) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>
                {description}
            </p>
            <ul>
                {
                    lista.map((li, index) => {
                        return <li key={`${li}${index}`} >{li}</li>
                    })
                }
            </ul>
            <div className={styles.links}>
                <a href={linkApp}>Ir a la aplicación </a>
                {
                    linkrepo ? <a href={linkrepo}>Ir al repositorio</a> : ""
                }
            </div>
        </div>
    )
}