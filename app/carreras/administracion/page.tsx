import CarrerasLayout from "@/app/components/CarrerasComponents/carrerasLayout";

const egresadoProfile = [
   "Alcanza objetivos y políticas estratégicas con la finalidad de tomar decisiones acertadas y oportunas.",
   "Desarrolla sistemas de costos en la administración moderna.",
   "Aplica las normas internacionales de contabilidad.",
   "Analiza e interpreta los estados financieros.",
   "Dictamina sobre los estados financieros, aplicando las Normas Internacionales de Auditoría.",
   "Utiliza modelos gerenciales como herramientas en la toma de decisiones.",
   "Crea y mantiene en todos los niveles de operación un espíritu grupal de cooperación, especialmente en el personal profesional y técnico bajo su coordinación."
];

export default function Administracion() {
    return (
        <CarrerasLayout
            heading="Administración"
            paragraph="La carrera de Administración tiene como objetivo formar profesionales capaces de planificar, organizar, dirigir y controlar los recursos humanos, 
            financieros y materiales en diferentes tipos de organizaciones. Se enfoca en el desarrollo de habilidades para la toma de decisiones estratégicas, 
            la resolución de problemas y la gestión eficiente de los procesos empresariales. Los beneficios de esta carrera incluyen la posibilidad de trabajar
             en una amplia variedad de sectores, desde empresas privadas hasta organizaciones sin fines de lucro, además de ofrecer una sólida base para el emprendimiento. 
             Los valores adquiridos en esta disciplina, como la ética profesional, la responsabilidad y la capacidad de liderazgo, son fundamentales para guiar a equipos
              hacia el éxito y fomentar un ambiente de trabajo productivo y equilibrado."
            src="/administracion.jpg"
            alt="Administración"
            egresadoProfile={egresadoProfile}
        />
    );
}

