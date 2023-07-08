import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

import styles from "../styles/Components.module.scss";

export default function CardProyectos() {
    return (
        <div id="proyectos" className={styles.cardProyectos} >
            <h2>Proyectos...</h2>
            <div className={styles.containerCards}>
                {
                    arrayCards.map(card => {
                        return <Card key={uuidv4()}
                            title={card.title}
                            description={card.description}
                            lista={card.lista}
                            linkApp={card.linkApp}
                            linkrepo={card.linkrepo}
                        />
                    })
                }

            </div>
        </div>
    )
}

interface ICard {
    title: string;
    description: string;
    lista: string[];
    linkApp: string;
    linkrepo?: string;
}

const arrayCards: ICard[] = [
    {
        title: 'App Subneteo',
        description: `Esta es una aplicacion web desarrollada con React.js y TypeScript, creada con Vite,
        desplegada en Vercel; en el que tu podras ingresar una
        direccion
        IP y las redes requeridas y
        obtendras:`,
        lista: [
            `Mascara de red en binario`,
            `Mascara de red en decimal`,
            `Clase de red (A, B, C)`,
            `El rango entre subredes o salto`,
            `Numero de hosts por subred`,
            `La secuencia de la mascara decimal definida por el rango`,
        ],
        linkApp: `https://subneteo-app-addrian.vercel.app/`,
        linkrepo: `https://github.com/addRian0-0/subneteo-app`
    },
    {
        title: 'MiniWiki personal Genshin Impact',
        description: `Una pequeña wiki personal sobre Genshin Impact que además sirve para ensayar conceptos y
        tecnologías de desarrollo web.Construida con:`,
        lista: [
            `React.js`,
            `Redux Toolkit`,
            `Vite`,
            `Mui`,
            `Plantilla de HTML 5UP!`
        ],
        linkApp: `https://genshin-miniwiki-personal.vercel.app/`,
        linkrepo: `https://github.com/addRian0-0/genshin-miniwiki-personal`
    },
    {
        title: `CryptoApp`,
        description: `Una app en la que podrás obtener la información de diferentes criptomonedas, como su
        nombre, nombre clave, imagen, simbolo, de igual manera sus datos de mercado como el ATH, precio actual
        volumen y su cambio de precio en las ultimas horas.`,
        lista: [
            `TypeScript`,
            `React-chartjs-2`,
            `React.js`,
            `Redux Toolkit`,
            `Vite`,
            `Mui`,
            `Plantilla de HTML 5UP!`
        ],
        linkApp: `https://crypto-app-rtk-ts.vercel.app/`,
        linkrepo: `https://github.com/addRian0-0/crypto-app-rtk-ts`
    },
    {
        title: "Portafolio personal",
        description: `Mi portafolio personal en el que conocerás más de mis aptitudes y actitudes como persona y como desarrollador web. Construido con:`,
        lista: [
            `Sass`,
            `React.js`,
            `TypeScript`,
            `Mui`,
            `Vite`
        ],
        linkApp: "https://addrian0-0.vercel.app/",
        linkrepo: "https://github.com/addRian0-0/portafolio-dev"
    },
    {
        title: "addHours - ¡Aprende más!",
        description: "En este blog comparto mis conocimientos relacionados con la programación para que distintas personas puedan aprender de ellos, al mismo que tiempo que los refuerzo a la hora de redactar los articulos.",
        lista: [
            `Sass`,
            `Next.js`,
            'Etc...'
        ],
        linkApp: `https://www.addhours.blog/`
    }
]