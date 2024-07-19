import CarrerasLayout from "@/app/components/CarrerasComponents/carrerasLayout";

const egresadoProfile = [
    "El egresado de la carrera de Sistemas de Calidad y Ambiente diseña y gestiona sistemas integrados de gestión de la calidad y el medio ambiente según normativas internacionales como ISO 9001 e ISO 14001.",
    "Implementa prácticas de mejora continua para optimizar procesos y aumentar la eficiencia operativa.",
    "Realiza auditorías internas y externas para asegurar el cumplimiento de los estándares de calidad y ambientales.",
    "Analiza y evalúa el impacto ambiental de las actividades organizacionales, desarrollando estrategias para su mitigación.",
    "Promueve la sostenibilidad y la responsabilidad social corporativa a través de la implementación de prácticas empresariales sostenibles.",
    "Gestiona programas de formación y sensibilización en calidad y medio ambiente para empleados y stakeholders.",
    "Fomenta una cultura de calidad y respeto al medio ambiente dentro de la organización, asegurando el compromiso de todos los niveles jerárquicos con estos valores"
];

export default function Sistemas() {
    return (
        <CarrerasLayout
            heading="Sistemas de Calidad y Ambiente"
            paragraph="La carrera de Sistemas de Calidad y Ambiente tiene como objetivo formar
             profesionales capacitados para diseñar, implementar y gestionar sistemas integrados
              de gestión de la calidad y medio ambiente en las organizaciones. Se enfoca en el
               cumplimiento de normativas internacionales, la mejora continua de procesos y la promoción
                de prácticas sostenibles que minimicen el impacto ambiental. Los beneficios de esta
                 carrera incluyen la posibilidad de contribuir al desarrollo sostenible, mejorar la
                  eficiencia operativa y asegurar el cumplimiento de estándares de calidad y ambientales.
                   Los valores adquiridos, como la responsabilidad, la ética y el compromiso con la
                    sostenibilidad, son esenciales para lograr una gestión eficaz y responsable."
            src="/administracion.jpg"
            alt="Administración"
            egresadoProfile={egresadoProfile}
        />
    );
}

