import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./welcomeSection.module.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function WelcomeSection() {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <h1>UPTAEB</h1>
                <p><span>&quot;</span>La voz del pensamiento<span>&quot;</span></p>
                <div className={styles.downarrow}>
                    <a href="#section1"><FontAwesomeIcon icon={faArrowDown} className={styles.customIcon} /></a>
                </div>
            </div>
        </div>
    );
}
