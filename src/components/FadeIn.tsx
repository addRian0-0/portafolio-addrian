"use client";
import React, { useEffect, useState } from 'react';

import styles from "../styles/Components.module.scss"

export default function FadeIn(
    { children }: { children: React.ReactNode }
) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const elementTop = window?.document?.getElementById('fade-in')?.offsetTop || 0;

            if (scrollTop > elementTop - windowHeight / 2) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div className={`${styles.fadeIn} ${isVisible ? styles.isVisible : ''}`}>{children}</div>;

}