import styles from './finalSection.module.css'

export default function FinalSection() {

    return (
        <div className={styles.container}>
            <h1>¿Qué Esperas?</h1>
            <p>Aplica a la UPTAEB ahora mismo, revisa nuestra pagina de carreras para ver todas la gran variedad de carreras que ofrecemos para ti, asi como la pagina de admisión para ver como aplicar a la UPTAEB mediante OPSU asi como por nuestra aplicación interna.</p>
            <div className={styles.links}>
            <a href="/carreras">Carreras</a>
            <a href="/admision">Admisión</a>
            </div>
        </div>
    )
}