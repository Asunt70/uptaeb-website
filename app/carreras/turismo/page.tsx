import CarrerasLayout from "@/app/components/CarrerasComponents/carrerasLayout";

const egresadoProfile = [
    "El egresado de la carrera de Turismo planifica y gestiona destinos turísticos, asegurando su desarrollo sostenible y la satisfacción de los visitantes.",
    "Diseña y organiza eventos y actividades turísticas innovadoras que promuevan el patrimonio cultural y natural.",
    "Desarrolla estrategias de marketing y promoción para atraer a turistas y posicionar destinos en el mercado.",
    "Analiza tendencias y demanda turística para adaptar los servicios y productos a las necesidades y expectativas de los clientes.",
    "Implementa prácticas sostenibles en la gestión turística para minimizar el impacto ambiental y promover la responsabilidad social.",
    "Gestiona la calidad del servicio en empresas turísticas, asegurando una experiencia positiva para los clientes.",
    "Promueve la ética y la responsabilidad en la actividad turística, contribuyendo al bienestar de las comunidades locales y la preservación de su cultura y medio ambiente."
];

export default function Turismo() {
    return (
        <CarrerasLayout
            heading="Turismo"
            paragraph="La carrera de Turismo tiene como objetivo formar profesionales
             capaces de planificar, gestionar y promover actividades y servicios
              turísticos de manera sostenible y eficiente. Se enfoca en el desarrollo
               de habilidades para la gestión de destinos turísticos, la organización
                de eventos, la creación de experiencias de viaje innovadoras y la
                 promoción del patrimonio cultural y natural. Los beneficios de esta
                  carrera incluyen la oportunidad de trabajar en una amplia variedad
                   de sectores, como agencias de viajes, hoteles, entidades gubernamentales
                    y organizaciones sin fines de lucro, además de contribuir al desarrollo
                     económico y cultural de las comunidades. Los valores adquiridos, como la
                      responsabilidad, la ética profesional y el compromiso con la sostenibilidad,
                       son esenciales para fomentar un turismo responsable y de calidad."
            src="/turismo.jpg"
            alt="tucacas imagen"
            egresadoProfile={egresadoProfile}
        />
    );
}

