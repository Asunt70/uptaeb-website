import CarrerasLayout from "@/app/components/CarrerasComponents/carrerasLayout";

const egresadoProfile = [
    "El egresado de la carrera de Distribución y Logística planifica y gestiona la cadena de suministro para optimizar procesos desde la producción hasta la entrega.",
    "Desarrolla y aplica tecnologías avanzadas para mejorar la eficiencia en el almacenamiento y el transporte de bienes.",
    "Analiza y diseña rutas de distribución que minimicen costos y tiempos de entrega.",
    "Promueve prácticas logísticas sostenibles que reduzcan el impacto ambiental y fomenten la responsabilidad social.",
    "Evalúa y mejora continuamente los sistemas logísticos para asegurar su eficiencia y adaptabilidad a cambios en el mercado.",
    "Gestiona la logística inversa, incluyendo la devolución y el reciclaje de productos.",
    "Fomenta la coordinación y la colaboración entre diferentes actores de la cadena de suministro para lograr una operación integrada y eficiente."
];

export default function Distribucion() {
    return (
        <CarrerasLayout
            heading="Distribución y Logística"
            paragraph="La carrera de Distribución y Logística tiene como objetivo formar profesionales
             capacitados para gestionar y optimizar la cadena de suministro, desde la producción hasta
              la entrega final del producto al consumidor. Se enfoca en el diseño y la implementación
               de estrategias eficientes para el almacenamiento, transporte y distribución de bienes,
                utilizando tecnologías avanzadas y prácticas sostenibles. Los beneficios de esta carrera
                 incluyen la oportunidad de trabajar en una variedad de industrias, mejorar la eficiencia
                  operativa y reducir costos logísticos. Los valores adquiridos, como la precisión, la
                   responsabilidad y el compromiso con la sostenibilidad, son fundamentales para garantizar
                    operaciones logísticas efectivas y responsables."
            src="/distribucion.jpg"
            alt="Administración"
            egresadoProfile={egresadoProfile}
        />
    );
}

