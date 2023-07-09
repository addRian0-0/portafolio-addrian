"use client";
import { useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Tooltip from '@mui/material/Tooltip';
import styles from "../styles/Components.module.scss";

import { IHabilidades } from "../interfaces/HabilidadesTecnologias";
import { tecFront, tecBack } from "../helpers/assets-imgs";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function CardHabilidades() {

    const [secHab, setSectionHabilidad] = useState<IHabilidades>(tecFront);
    const [section, setSection] = useState<string>("Vanilla");
    const [img, setImg] = useState<string>("/programacion.png");

    const changeSection = (sectionChange: string) => {
        setSection(sectionChange);
    }

    const siguiente = () => {
        if (secHab === tecFront) {
            setSectionHabilidad(tecBack);
            setSection("Lenguajes");
            setImg("/backend.png");
        }
        if (secHab === tecBack) {
            setSectionHabilidad(tecFront);
            setSection("Vanilla");
            setImg("/programacion.png");
        }
    }

    const anterior = () => {
        if (secHab === tecBack) {
            setSectionHabilidad(tecFront);
            setSection("Vanilla");
            setImg("/programacion.png");
        }
        if (secHab === tecFront) {
            setSectionHabilidad(tecBack);
            setSection("Lenguajes");
            setImg("/backend.png");
        }
    }

    return (
        <FadeIn>
            <div id="habilidades" className={styles.cardHabilidades}>
                <h2>Mis habilidades como...</h2>
                <div className={styles.introHabilidades} >
                    <p>
                        Durante los últimos años, me he enfocado en estudiar
                        programación con un enfoque en el desarrollo web, tanto
                        del lado del cliente como del servidor. He trabajado con tecnologías como:
                    </p>
                    <Link className={styles.moreInformation} href={"/more"}>Más información sobre formación y habilidades...</Link>
                </div>
                <div className={styles.habilidadesInfo}>

                    <div className={styles.arrow} >
                        <KeyboardArrowLeftIcon onClick={anterior} sx={{ fontSize: "42px" }} />
                    </div>

                    <div className={styles.main}>
                        <div className={styles.title}>
                            <div className={styles.img}>
                                <Image width={128} height={128} src={img} alt="habilidades" />
                            </div>
                            <h3>{secHab.title}</h3>
                            <ul>
                                {
                                    secHab.sections.map(sec => {
                                        return <li key={sec}
                                            onClick={() => changeSection(sec)}
                                            className={section === sec ? `${styles.liSelected}` : ""} >
                                            {sec}
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className={styles.content}>
                            {
                                secHab.tecnologias.map((tec, index) => {
                                    return tec.section === section ?
                                        <div
                                            className={`animate__animated animate__fadeInDown`}
                                            key={tec.nombre} >
                                            <Tooltip title={tec.nombre.toUpperCase()} followCursor>
                                                <Image width={64} height={64} src={tec.link} alt={tec.nombre} />
                                            </Tooltip>
                                        </div> : ""
                                })
                            }

                        </div>
                    </div>

                    <div className={styles.arrow}>
                        <KeyboardArrowRightIcon onClick={siguiente} sx={{ fontSize: "42px" }} />
                    </div>
                    
                </div>
            </div >
        </FadeIn>
    )
}