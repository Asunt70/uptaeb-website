import CarrerasLayout from "@/app/components/CarrerasComponents/carrerasLayout";

const egresadoProfile = [
    "El egresado de la carrera de Higiene y Seguridad Laboral planifica y gestiona programas de seguridad y salud ocupacional en distintos entornos laborales.",
    "Desarrolla e implementa estrategias preventivas para minimizar riesgos y prevenir accidentes laborales.",
    "Realiza auditorías e inspecciones de seguridad para asegurar el cumplimiento de normativas y regulaciones vigentes.",
    "Analiza y evalúa los riesgos laborales utilizando metodologías científicas y herramientas especializadas.",
    "Promueve la cultura de seguridad entre los trabajadores a través de la capacitación y la concienciación.",
    "Gestiona sistemas de emergencia y respuesta ante incidentes para minimizar el impacto de los accidentes laborales.",
    "Fomenta un entorno de trabajo seguro y saludable, asegurando el bienestar físico y mental de los empleados."
];

export default function Higiene() {
    return (
        <CarrerasLayout
            heading="Higiene y Seguridad Laboral"
            paragraph="La carrera de Higiene y Seguridad Laboral tiene como objetivo formar profesionales
             capacitados para identificar, evaluar y controlar los riesgos laborales,
              garantizando un entorno de trabajo seguro y saludable. Se enfoca en la implementación
               de normativas y prácticas preventivas que protejan la salud de los trabajadores y reduzcan
                la incidencia de accidentes y enfermedades ocupacionales. Los beneficios de esta carrera
                 incluyen la oportunidad de trabajar en diversos sectores industriales, mejorar las
                  condiciones laborales y contribuir al cumplimiento de leyes y regulaciones. Los valores
                   adquiridos, como la responsabilidad, la ética profesional y el compromiso con la
                    seguridad y el bienestar de los empleados, son fundamentales para el desempeño eficaz
                     en este campo."
            src="/higiene.jpg"
            alt="persona soldando usando protección"
            egresadoProfile={egresadoProfile}
        />
    );
}

