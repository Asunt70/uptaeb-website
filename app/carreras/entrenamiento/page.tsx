import CarrerasLayout from "@/app/components/CarrerasComponents/carrerasLayout";

const egresadoProfile = [
    "El egresado de la carrera de Entrenamiento Deportivo planifica y gestiona programas de entrenamiento adaptados a las necesidades y objetivos de cada deportista",
    "Desarrolla y aplica métodos de entrenamiento basados en principios científicos para optimizar el rendimiento físico",
    "Analiza y evalúa el progreso de los deportistas utilizando herramientas y tecnologías avanzadas.",
    "Promueve hábitos de vida saludable y una nutrición adecuada como parte integral del entrenamiento deportivo.",
    "Fomenta la prevención de lesiones a través de la correcta técnica y el acondicionamiento físico adecuado.",
    "Trabaja en equipo con otros profesionales de la salud y el deporte para ofrecer un enfoque multidisciplinario.",
    "Mantiene un compromiso ético y responsable, asegurando el bienestar y la seguridad de los deportistas en todo momento."
];

export default function Entrenamiento() {
    return (
        <CarrerasLayout
            heading="Entrenamiento Deportivo"
            paragraph="La carrera de Entrenamiento Deportivo tiene como objetivo formar profesionales
             especializados en el desarrollo, planificación y supervisión de programas de entrenamiento
              físico para deportistas de diversas disciplinas y niveles. Se enfoca en la aplicación
               de conocimientos científicos sobre fisiología, biomecánica, nutrición y psicología del
                deporte para mejorar el rendimiento y la salud de los atletas. Los beneficios de esta
                 carrera incluyen la oportunidad de trabajar en clubes deportivos, gimnasios, instituciones
                  educativas y equipos profesionales, además de contribuir a la promoción de un estilo
                   de vida saludable. Los valores adquiridos, como la disciplina, la ética profesional
                    y el compromiso con el bienestar de los deportistas, son esenciales para el éxito en
                     este campo."
            src="/entrenamiento.jpg"
            alt="entrenador corrigiendo la posición de una persona"
            egresadoProfile={egresadoProfile}
        />
    );
}

