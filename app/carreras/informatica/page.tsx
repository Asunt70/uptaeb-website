import CarrerasLayout from "@/app/components/CarrerasComponents/carrerasLayout";

const egresadoProfile = [
    "El egresado de la carrera de Informática desarrolla y mantiene sistemas de software eficientes y seguros, adaptados a las necesidades específicas de las organizaciones.",
    "Diseña y administra bases de datos robustas que facilitan el almacenamiento y acceso a grandes volúmenes de información.",
    "Implementa y gestiona redes de comunicación que aseguran la conectividad y la seguridad de los datos.",
    "Aplica principios de ciberseguridad para proteger la información y los sistemas contra amenazas y vulnerabilidades.",
    "Utiliza metodologías de desarrollo ágil y gestión de proyectos para asegurar la entrega oportuna y de alta calidad de soluciones tecnológicas.",
    "Fomenta la innovación mediante el desarrollo de aplicaciones y servicios que integran tecnologías emergentes, como la inteligencia artificial y el aprendizaje automático.",
    "Promueve la ética y la responsabilidad en el uso de la tecnología, asegurando el respeto a la privacidad y la integridad de la información."
];

export default function Informatica() {
    return (
        <CarrerasLayout
            heading="Informática"
            paragraph="La carrera de Informática tiene como objetivo formar profesionales competentes
             en el diseño, desarrollo, implementación y gestión de sistemas de información y tecnologías
              computacionales. Se enfoca en el estudio de la programación, las bases de datos, las redes
               de comunicación, la seguridad informática y la inteligencia artificial, entre otros campos.
                Los beneficios de esta carrera incluyen una alta demanda laboral en diversas industrias,
                 oportunidades para la innovación tecnológica y el desarrollo de soluciones que optimizan
                  procesos y mejoran la eficiencia organizacional. Los valores adquiridos, como la
                   precisión, la ética en el uso de la tecnología y el compromiso con la mejora continua,
                    son esenciales para enfrentar los desafíos del mundo digital."
            src="/informatica.jpg"
            alt="computador mostrando codigo"
            egresadoProfile={egresadoProfile}
        />
    );
}

