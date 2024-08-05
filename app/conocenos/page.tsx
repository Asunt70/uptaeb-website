import Navbar from "../components/globalComponents/navbar";
import Footer from "../components/globalComponents/footer";
import styles from "./page.module.css";

export default function Conocenos() {
    return (
        <>
        <Navbar/>
        <div className={styles.container}>
            <h1>Historia de la UPTAEB</h1>
            <div className={styles.date}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
            <span>Fecha: 4 de Agosto del 2024</span>
            </div>
            <hr />
            <section className={styles.section}>
                <h2>De Ciclo Básico a Uniersidad: Un Trayecto de Crecimiento</h2>
                <p>La Universidad Politécnica Territorial de Lara Andrés Eloy Blanco (UPTAEB) constituye un pilar fundamental en el tejido educativo de la región. Sus raíces se hunden en el año 1972, cuando inició su andadura como Ciclo Básico Superior (CBS), una iniciativa pionera destinada a preparar a los jóvenes para los desafíos de la educación superior. En aquel entonces, la institución ofrecía una oportunidad invaluable para aquellos estudiantes que, habiendo culminado la educación media, aspiraban a continuar sus estudios universitarios en las instituciones de la región.</p>
                <p>El CBS, con su visión progresista, sentó las bases para lo que posteriormente se convertiría en un referente educativo. En 1982, dando un paso trascendental, se transformó en el Instituto Universitario Experimental de Barquisimeto (IUEB), ampliando su oferta académica y consolidando su papel como formador de profesionales.</p>
                <p>Un hito significativo se alcanzó en 1988 cuando el IUEB adoptó el ilustre nombre de Andrés Eloy Blanco, un homenaje al insigne escritor y político venezolano. Este cambio de denominación reflejó la aspiración de la institución por cultivar en sus estudiantes los valores de la intelectualidad, la crítica y el compromiso social, legados por el ilustre personaje.</p>
            </section>
            <section className={styles.section}>
                <h2>Un Nuevo Milenio, Una Nueva Visión</h2>
                <p>El siglo XXI trajo consigo nuevos desafíos y oportunidades para la educación superior venezolana. Consciente de esta realidad, el IUEB emprendió en 2001 un ambicioso proceso de modernización y transformación. Esta etapa estuvo marcada por una profunda revisión curricular, la incorporación de nuevas tecnologías y la adaptación a las demandas cambiantes del mercado laboral.</p>
                <p>El punto culminante de este proceso de renovación se materializó en 2009, cuando el IUEB ascendió a la categoría de universidad, adoptando el nombre de Universidad Politécnica Territorial de Lara Andrés Eloy Blanco (UPTAEB). Este logro representó un reconocimiento a la trayectoria de la institución y abrió nuevas perspectivas para su desarrollo.</p>
            </section>
            <section className={styles.section}>
                <h2>La UPTAEB: Forjando el Futuro</h2>
                <p>La UPTAEB se ha consolidado como una institución de educación superior comprometida con la formación integral de sus estudiantes. Su oferta académica abarca diversas áreas del conocimiento, respondiendo así a las necesidades de la región y del país. La universidad se destaca por su enfoque práctico y aplicado, preparando a sus egresados para desempeñarse con éxito en el mundo laboral.</p>
                <p>Más allá de la formación académica, la UPTAEB fomenta el desarrollo de competencias genéricas como el liderazgo, el trabajo en equipo, la comunicación efectiva y la capacidad de resolución de problemas. Asimismo, promueve la investigación y la innovación como pilares fundamentales para el avance del conocimiento y el desarrollo tecnológico.</p>
                <p>La universidad mantiene un estrecho vínculo con la comunidad, participando activamente en proyectos de extensión universitaria que generan un impacto positivo en la sociedad. A través de estas iniciativas, la UPTAEB contribuye al desarrollo local y regional, promoviendo la inclusión social y la equidad.</p>
                <p>En definitiva, la Universidad Politécnica Territorial de Lara Andrés Eloy Blanco es una institución en constante evolución, comprometida con la excelencia académica y la formación de ciudadanos responsables y competentes. Su trayectoria, marcada por el crecimiento y la adaptación, la posiciona como un referente en el ámbito educativo venezolano.</p>

            </section>
            
        </div>
        <Footer/>
        </>
    );
}