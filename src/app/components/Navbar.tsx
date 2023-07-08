"use client";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

import ButtonCV from "./ButtonCV";
import styles from "../styles/Components.module.scss";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div><h1>Ithan Flores <span> - Inicio</span> </h1></div>
            <div>
                <ul className={styles.menu} >
                    <li>
                        <LinkScroll
                            to="acerca"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            <a className={styles.aUnset} href="#acerca">Acerca</a>
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll
                            to="habilidades"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            <a className={styles.aUnset} href="#habilidades">Habilidades</a>
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll
                            to="proyectos"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            <a className={styles.aUnset} href="#proyectos">Proyectos</a>
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll
                            to="#"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            <a className={styles.aUnset} href="#">Contáctame</a>

                        </LinkScroll>
                    </li>
                    <li>
                        <ButtonCV />
                    </li>
                </ul>
            </div>
        </header>
    )
}