import CarrerasLayout from "@/app/components/CarrerasComponents/carrerasLayout";

const egresadoProfile = [
    "Tecnologías de la información",
    "Tecnologías de la información",
    "Tecnologías de la información",
    "Tecnologías de la información",
    "Tecnologías de la información"
];

export default function Turismo() {
    return (
        <CarrerasLayout
            heading="Turismo"
            paragraph="En la UPTAEB nos esforzamos por aportar la mejor educación gratuita posible, ofreciendo diversos campos de estudio en distintos niveles académicos, como PNF, Licenciatura, TSU, o Ingeniería. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, rerum aut vero eligendi quae aliquam facilis optio autem harum vel fugiat dignissimos molestiae necessitatibus ipsum corrupti consequuntur dolore eos tempora?"
            src="/turismo.jpg"
            alt="tucacas imagen"
            egresadoProfile={egresadoProfile}
        />
    );
}

