import CarrerasLayout from "@/app/components/CarrerasComponents/carrerasLayout";

const egresadoProfile = [
    "El egresado de la carrera de Contaduría planifica y organiza el sistema contable y tributario de las organizaciones.",
    "Alcanza objetivos y políticas estratégicas mediante la elaboración y análisis de estados financieros.",
    "Dictamina sobre los estados financieros, aplicando las Normas Internacionales de Auditoria",
    "Analiza e interpreta estados financieros para la toma de decisiones estratégicas.",
    "Utiliza herramientas tecnológicas avanzadas para la gestión contable y financiera.",
    "Promueve la ética y la transparencia en todas las prácticas contables y financieras.",
    "Desarrolla habilidades en auditoría interna y externa para asegurar la integridad de la información financiera."
];

export default function Contaduría() {
    return (
        <CarrerasLayout
            heading="Contaduría"
            paragraph="La carrera de Contaduría tiene como objetivo formar profesionales expertos en la gestión y 
            el control de la información financiera de las organizaciones. Se enfoca en la preparación, 
            análisis y verificación de estados financieros, así como en el diseño y aplicación de sistemas
             contables y de auditoría que permitan una administración eficiente de los recursos económicos. Los 
             beneficios de esta carrera incluyen una amplia gama de oportunidades laborales en diversos 
             sectores, tanto públicos como privados, y la posibilidad de desempeñarse en roles críticos 
             para la toma de decisiones estratégicas. Los valores adquiridos, como la integridad, la precisión
              y el compromiso con la transparencia, son esenciales para garantizar la confiabilidad de la 
              información financiera y contribuir al desarrollo sostenible de las organizaciones."
            src="/contaduria.jpg"
            alt="calculadora y libreta"
            egresadoProfile={egresadoProfile}
        />
    );
}

