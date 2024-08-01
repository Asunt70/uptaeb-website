'use client'
import { useEffect } from "react";
import styles from "./section.module.css";
import {useInView} from "react-intersection-observer";

interface SectionProps {
    id: string;
    heading: string;
    src: string;
    reverse?: boolean;
    pContent: string;

}

export default function Section(props: SectionProps) {

    const { ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

    useEffect(() => {
        if (inView) {

        }
    }, [inView]);

    return (
        <div id={props.id} ref={ref} className={`${styles.section} ${props.reverse ? styles.reverse : ''} ${inView ? styles.transitionIn:''}`}>
            <div className={styles.cardContent}>
            <h1>{props.heading}</h1>
                <p>{props.pContent}</p>
            </div>
            <div className={styles.card}>
                <img src={props.src} alt="" />
            </div>
        </div>
    )
}