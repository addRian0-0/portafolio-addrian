"use client";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

import ButtonCV from "./ButtonCV";
import styles from "../styles/Components.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ page }: { page: string }) {

    const pathname = usePathname();

    return (
        <header className={styles.header}>
            <div><h1>Ithan Flores <span> - {page}</span> </h1></div>
            <div>
                <ul className={styles.menu} >
                    <li>

                        {
                            pathname !== "/" ?
                                <Link className={styles.aUnset} href={"/#acerca"} >
                                    Acerca
                                </Link>
                                :
                                <LinkScroll
                                    to="acerca"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Acerca
                                </LinkScroll>
                        }

                    </li>
                    <li>

                        {
                            pathname !== "/" ?
                                <Link className={styles.aUnset} href={"/#habilidades"} >
                                    Habilidades
                                </Link>
                                :
                                <LinkScroll
                                    to="habilidades"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Habilidades
                                </LinkScroll>
                        }

                    </li>
                    <li>

                        {
                            pathname !== "/" ?
                                <Link className={styles.aUnset} href={"/#proyectos"} >
                                    Habilidades
                                </Link>
                                :
                                <LinkScroll
                                    to="proyectos"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Proyectos
                                </LinkScroll>
                        }

                    </li>
                    <li>
                        <ButtonCV />
                    </li>
                </ul>
            </div>
        </header>
    )
}