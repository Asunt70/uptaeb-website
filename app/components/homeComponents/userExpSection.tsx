import styles from './userExpSection.module.css'

export default function UserExpSection() {
    
    return(
        <div className={styles.bgImage}>
            <div className={styles.blur}></div>
            <div className={styles.content}>
                <img src="download.jpg" alt="" />
                <p className={styles.quote}>&quot;En la uptaeb he aprendido que lo mas importante de estudiar es la experiencia&quot;</p>
                <h3>Pedro Perez</h3>
                <p>Estudiante de fisica</p>
            </div>
        </div>
    )
}