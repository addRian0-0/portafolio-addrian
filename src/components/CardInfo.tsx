/* "use client"; */
import styles from "../styles/Components.module.scss";
import FadeIn from "./FadeIn";

export default function CardInfo() {

    return (
        <FadeIn >
            <section id="acerca">
                <div className={styles.cardInfo} >
                    <div className={styles.info}>
                        <h2>Un poco más de mi...</h2>
                        <p>
                            Soy <span>Ithan Adrian Flores Zamora</span>, me percibo como alguien
                            que tiene sus metas claras y con una verdadera pasión por
                            aprender, me gusta brindar mi apoyo como me gustaría recibirlo.
                            Soy alguien que tiene en claro su persona, las malas y buenas
                            actitudes que me conforman y que trata de corregir las malas para mejorar como persona.
                        </p>
                    </div>
                </div>
            </section>
        </FadeIn>
    )

}
