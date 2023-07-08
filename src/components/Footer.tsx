"use client";

import Telegram from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

import styles from "../styles/Components.module.scss";

export default function Footer() {

    return (
        <footer className={styles.footer} >
            <div id="contacto" className={styles.contacto}>
                <div >
                    <Link href="https://www.linkedin.com/in/ithan-addrian/">
                        <LinkedInIcon className={styles.icon} sx={{ fontSize: "32px", color: "#eae7e7cc" }} />
                    </Link>
                </div>
                <div >
                    <Link href="https://github.com/addRian0-0/">
                        <GitHubIcon className={styles.icon} sx={{ fontSize: "32px", color: "#eae7e7cc" }} />
                    </Link>
                </div>
                <div >
                    <Link href="https://www.instagram.com/c_addriann/">
                        <InstagramIcon className={styles.icon} sx={{ fontSize: "32px", color: "#eae7e7cc" }} />
                    </Link>
                </div>
                <div >
                    <Link href="https://t.me/Ithanf">
                        <Telegram className={styles.icon} sx={{ fontSize: "32px", color: "#eae7e7cc" }} />
                    </Link>
                </div>
            </div>
            <div className={styles.dereReser}>
                <h4>
                    <span>&copy; Ithan Flores.</span>
                    <span> Todos los reservados.</span>
                </h4>
            </div>
        </footer>
    )

}