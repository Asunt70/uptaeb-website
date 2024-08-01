import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"
import styles from './footer.module.css'

export default function Footer() {

    const year = new Date().getFullYear();

    return (
            <footer className={styles.footer}>
                <div className={styles.logo}>
                    <Link href="/"><img src="/logo.png" alt="University Logo" /></Link>
                </div>
                <div className={styles.content}>
          
                <div className={styles.contact}>
                        <p>Contacto</p>
                        <a href='' target='_blank'>Ubícanos</a>
                        <a href="mailto:educacionmediadaticl@uptaeb.edu.ve">Correo Electrónico</a>
                        <div className={styles.social}>
                        <a id="facebook" href="https://www.facebook.com/uptdelara" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a id ="instagram" href="https://www.instagram.com/uptlara/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a id ="twitter" href="https://x.com/uptlara" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter}/></a>
                        </div>
                    </div>
                    <div className={styles.footnav}>
                        <p>Enlances</p>
                    <Link className={styles.hideOnMobile} href="/">Inicio</Link>
                    <Link className={styles.hideOnMobile} href="/carreras">Carreras</Link>
                    <Link className={styles.hideOnMobile} href="/uptaeb-virtual">Uptaeb Virtual</Link>
                    <Link className={styles.hideOnMobile} href="/conocenos">Conócenos</Link>
                    </div>
                    <div className={styles.legal}>
                        <p>Informacion Legal</p>
                        <a href='#'>Legal</a>
                        <a href='#'>Aviso de privacidad</a>
                    </div>
                </div>
                <div className={styles.empty}>
                    <p>&copy; {year} UPTAEB. Todos los derechos reservados</p>
                </div>

            </footer>
    );
}