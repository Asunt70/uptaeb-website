interface SectionProps {
    heading: string;
    src: string;
}


export default function Section (props: SectionProps) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <img src={props.src} alt="" />
        </div>
    )
}