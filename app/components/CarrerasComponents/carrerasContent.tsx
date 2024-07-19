import styles from './carrerasContent.module.css'

export default function CarrerasContent() {
    return (
        <div className={styles.container}>
            <h1>Carreras</h1>
            <hr />
            <p>Nuestra universidad ofrece carreras de distintos campos a traves de los Programas Nacionales de Formación <b>(PNF)</b> los 
            cuales están orientados y diseñados para otorgar a los estudiantes el título de Técnico Superior Universitario <b>(TSU)</b> en
             un periodo de dos años y el Título de Licenciatura o Ingeniería luego de cuatro años. </p>
            <ul>
                <li><a href="/carreras/administracion">PNF en Administración</a></li>
                <li><a href="/carreras/agroalimentacion">PNF en Agroalimenatación</a></li>
                <li><a href="/carreras/cs-informacion">PNF en  Ciencias de la Información</a></li>
                <li><a href="/carreras/contaduria">PNF en Contaduría</a></li>
                <li><a href="/carreras/distribucion">PNF en Distribucion y Logística</a></li>
                <li><a href="/carreras/entrenamiento">PNF en Entrenamiento Deportivo</a></li>
                <li><a href="/carreras/higiene">PNF en Higiene y Seguridad Laboral</a></li>
                <li><a href="/carreras/informatica">PNF en Informatica</a></li>
                <li><a href="/carreras/sistemas">PNF en Sistemas de Calidad y Ambiente</a></li>
                <li><a href="/carreras/turismo">PNF en Turismo</a></li>
            </ul>
        </div>
    )
}