import CarrerasLayout from "@/app/components/CarrerasComponents/carrerasLayout";

const egresadoProfile = [
    "El egresado de la carrera de Agroalimentación planifica y gestiona sistemas de producción agrícola y pecuaria sostenibles.",
    "Desarrolla y aplica tecnologías innovadoras para el procesamiento y conservación de alimentos",
    "Analiza la calidad y seguridad de los productos alimentarios a lo largo de toda la cadena de suministro.",
    "Gestiona la logística y distribución de productos agroalimentarios para optimizar su eficiencia y reducir desperdicios.",
    "Promueve prácticas agrícolas sostenibles que minimicen el impacto ambiental y fomenten la biodiversidad.",
    "Evalúa y mejora los procesos de producción y procesamiento para cumplir con las normativas de seguridad alimentaria.",
    "Fomenta la responsabilidad social y la ética en todas las etapas de la producción y distribución de alimentos."
];

export default function Agroalimentacion() {
    return (
        <CarrerasLayout
            heading="Agroalimentación"
            paragraph="La carrera de Agroalimentación tiene como objetivo formar profesionales
             capacitados para optimizar la producción, procesamiento y distribución de alimentos,
              garantizando su calidad y sostenibilidad. Se enfoca en el estudio de sistemas agrícolas
               y pecuarios, la innovación en tecnología alimentaria y la gestión de la cadena de suministro
                de alimentos. Los beneficios de esta carrera incluyen la posibilidad de contribuir a la
                 seguridad alimentaria, mejorar prácticas agrícolas sostenibles y desarrollar productos
                  alimenticios innovadores. Los valores adquiridos, como la responsabilidad social, el
                   compromiso con la sostenibilidad y la ética en la producción y distribución de alimentos,
                    son cruciales para enfrentar los desafíos globales relacionados con la alimentación."
            src="/agroalimentacion.jpg"
            alt="campo de cereal"
            egresadoProfile={egresadoProfile}
        />
    );
}

