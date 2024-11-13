'use client';
import { useState, useEffect } from 'react';
import styles from "./navbar.module.css"
import Link from "next/link"

export default function Navbar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setIsScrollingUp(false);
            } else {
                // Scrolling up
                setIsScrollingUp(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showSideBar = () => {
        setSidebarVisible(true);
    }

    const hideSideBar = () => {
        setSidebarVisible(false);
    }

    return (
        <div>
            <div className={`${styles.navbar} ${isScrollingUp ? styles.navbarShow : styles.navbarHide}`}>
                <div className={styles.logo}>
                    <Link href="/"><img src="/logo.png" alt="University Logo" /></Link>
                </div>
                <div className={styles.links}>
                    <Link className={styles.hideOnMobile} href="/">Inicio</Link>
                    <Link className={styles.hideOnMobile} href="/carreras">Carreras</Link>
                    <Link className={styles.hideOnMobile} href="/conocenos">Conócenos</Link>
                  
                </div>
                <button className={styles.hideOnDesktop} onClick={showSideBar}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#e8eaed">
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                        </svg>
                    </button>
            </div>
            <div className={`${styles.sidebar} ${sidebarVisible ? styles.visible : ''}`}>
                <button onClick={hideSideBar}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="#e8eaed">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                </button>
                <div className={styles.linksSideBar}>
                    <Link href="/">Inicio</Link>
                    <Link href="/carreras">Carreras</Link>
                    <Link href="/conocenos">Conócenos</Link>
                </div>
            </div>
        </div>
    )
}
