import Image from "next/image";
import Layout from "./components/Layout";

import styles from "./styles/Components.module.scss";
import CardInfo from "./components/CardInfo";
import CardHabilidades from "./components/CardHabilidades";
import CardProyectos from "./components/CardProyects";

export default function Home() {

  return (
    <>
      <Layout>

        <div className={styles.cardPresentation} >
          <div className={styles.presentationInfo} >
            <h2 className={styles.h2}>¡Hola! Soy <span>Ithan Flores</span>.</h2>
            <p>
              Desarrollador web Front-end, Back-end o FullStack, llámalo como quieras.
            </p>
          </div>
          <div>
            <Image src={"/me.jpeg"} alt="me" width={276} height={276} className={styles.img} />
          </div>
        </div>

        <CardInfo />
        <CardHabilidades />
        <CardProyectos />

      </Layout>
    </>
  )
}
