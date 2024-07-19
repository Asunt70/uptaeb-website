import styles from "./carrerasLayout.module.css";
import Navbar from "../navbar";
import Footer from "../footer";

interface CarrerasLayoutProps {
    heading: string;
    paragraph: string;
    src: string;
    alt: string;
    egresadoProfile: string[];
}

export default function CarrerasLayout(props: CarrerasLayoutProps) {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.subheader}>
                    <div className={styles.filter}>
                    <div className={styles.content}>
                    <div className={styles.buttonContainer}>
                        <a href="/carreras">
                           <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                           <p>Volver</p>
                        </a>
                    </div>
                    <h1>{props.heading}</h1>
                    </div>
                    </div>
                </div>
                <section className={styles.carrera}>
                    <div className={styles.carreraInfo}>
                        <div className={styles.text}>
                            <h2>{props.heading}</h2>
                            <p>{props.paragraph}</p>
                        </div>
                        <div className={styles.img}>
                            <img src={props.src} alt={props.alt} />
                        </div>
                    </div>
                </section>
                <section className={styles.masInfo}>
                    <div className={styles.egresadoInfo}>
                        <h3>Perfil del egresado</h3>
                        <ul>
                            {props.egresadoProfile.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.pensum}>
                        <button><a href="#">Pensum de estudio</a></button>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
