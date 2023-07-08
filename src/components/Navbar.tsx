"use client";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

import ButtonCV from "./ButtonCV";
import styles from "../styles/Components.module.scss";
import Link from "next/link";

export default function Navbar({ page }: { page: string }) {
    return (
        <header className={styles.header}>
            <div><h1>Ithan Flores <span> - {page}</span> </h1></div>
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
                            Acerca
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
                            Habilidades
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
                            Proyectos
                        </LinkScroll>
                    </li>
                    {/* <li>
                        <LinkScroll
                            to="#"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            Contacto
                        </LinkScroll>

                    </li> */}
                    <li>
                        <Link href="/more/" target="blank">
                            <ButtonCV />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}