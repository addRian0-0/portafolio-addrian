import Head from "next/head";

import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Components.module.scss";

interface Props {
    children: React.ReactNode;
    title: string;
}

export default function Layout(
    { children, title }: Props
) {

    return (
        <>
            <Head>
                <title>{`Ithan`}</title>
                <meta property="og:title" content={`Ithan - ${title}`} key="title" />
            </Head>
            <Navbar page={title} />
            <main className={styles.main} >{children}</main>
            <Footer />
        </>
    )

}