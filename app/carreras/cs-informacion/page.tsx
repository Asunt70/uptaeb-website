import CarrerasLayout from "@/app/components/CarrerasComponents/carrerasLayout";

const egresadoProfile = [
    "El egresado de la carrera de Ciencias de la Información planifica y gestiona sistemas de información en diversos entornos organizacionales.",
    "Desarrolla y aplica tecnologías avanzadas para la recopilación, almacenamiento y recuperación de datos.",
    "Analiza y organiza grandes volúmenes de información para facilitar su acceso y uso.",
    "Promueve la ética y la privacidad en el manejo y la difusión de información.",
    "Evalúa y mejora continuamente los sistemas de gestión de información para asegurar su eficiencia y relevancia.",
    "Fomenta la accesibilidad y la transparencia de la información para todos los usuarios.",
    "Desarrolla habilidades en la preservación digital y el mantenimiento de archivos y bibliotecas en formato físico y electrónico."
];

export default function csInformacion() {
    return (
        <CarrerasLayout
            heading="Ciencias de la Información"
            paragraph="La carrera de Ciencias de la Información tiene como objetivo formar profesionales
             especializados en la gestión, organización y difusión de información en diversos formatos
              y contextos. Se enfoca en el desarrollo de habilidades para manejar grandes volúmenes de
               datos, utilizar tecnologías de la información y la comunicación (TIC) y garantizar el acceso
                y la preservación de la información. Los beneficios de esta carrera incluyen la posibilidad
                 de trabajar en una amplia variedad de sectores, desde bibliotecas y archivos hasta
                  empresas de tecnología y organizaciones gubernamentales. Los valores adquiridos,
                   como la precisión, la ética en el manejo de la información y el compromiso con la
                    accesibilidad y la transparencia, son esenciales para el desarrollo de una sociedad
                     informada y democrática."
            src="/csInformacion.jpg"
            alt="una persona analizando datos"
            egresadoProfile={egresadoProfile}
        />
    );
}

