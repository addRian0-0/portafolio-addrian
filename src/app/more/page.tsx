"use client";
import { useState, useRef } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Images, arrayImages } from "@/helpers/assets-certifications";

import styles from "../../styles/Components.module.scss";
import Link from "next/link";

export default function MoreInfo() {

    const [numImg, setNumImg] = useState<number>(0);
    const [img, setImg] = useState<Images>(arrayImages[numImg]);

    const siguiente = () => {
        if (numImg === arrayImages.length) {
            setNumImg(0);
        } else {
            setNumImg(numImg + 1);
            setImg(arrayImages[numImg]);
        }
    }

    const anterior = () => {
        if (numImg === 0) {
            setNumImg(arrayImages.length);
        } else {
            setNumImg(numImg - 1);
            setImg(arrayImages[numImg]);
        }
    }

    return (
        <Layout title="Formación y Habilidades" >
            <div className={styles.certificaciones} >

                <div className={styles.arrow} >
                    <KeyboardArrowLeftIcon onClick={anterior} sx={{ fontSize: "42px" }} />
                </div>

                <div className={styles.main}>
                    <Image
                        className={`${styles.imageCer} animate__animated animate__fadeInDown`}
                        key={uuidv4()}
                        src={img.src}
                        /* width={windowSize[0] > 1200 ? 712 : 356}
                        height={windowSize[1] > 700 ? 513 : 256.6} */
                        width={712}
                        height={513}
                        alt={img.nombre}
                    />
                </div>

                <div className={styles.arrow}>
                    <KeyboardArrowRightIcon onClick={siguiente} sx={{ fontSize: "42px" }} />
                </div>

            </div>
            <div className={styles.descripcionCertificacion} >
                <p>
                    <span className={styles.element}>Nombre: </span> <span className={styles.value} >{img.nombre}</span> <br /> <br />
                    <span className={styles.element}>Emisora: </span> <span className={styles.value} >{img.emisora}</span> <br /> <br />
                    <span className={styles.element}>Fecha de expedición: </span> <span className={styles.value} >{img.fechaExpedicion}</span> <br /> <br />
                    <span className={styles.element}>ID de la credencial: </span> <span className={styles.value} >{img.id}</span> <br /> <br />
                    <span className={styles.element}>Url de la credencial: </span> <span className={styles.value} >
                        <Link className={styles.valueLink} href={img.url}>
                            ...{img.url.slice(12, 45)}...
                        </Link>
                    </span>
                    <br /> <br />
                    <span className={styles.element} >Descripción: </span> {img.description}
                </p>
            </div>
        </Layout>
    )
}


