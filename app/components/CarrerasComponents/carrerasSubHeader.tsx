import styles from './carrerasSubHeader.module.css'



export default function CarrerasSubHeader () {

    return (

        <div className={styles.bckContainer}>
            <div className={styles.filter}>
                <div className={styles.content}>
                <h1>Explora nuestras carreras</h1>
                <p>Descubre todos los campos de estudio que la UPTAEB tiene para ti, asi como sus modalidades. Tambien ofrecemos
                     programas con certificados y cursos en linea.</p>
                </div>
            </div>
        </div>
    
    )
}