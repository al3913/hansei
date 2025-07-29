
type CardProps = {
    title : string;
    body : string;
    angle : 'left' | 'right';
}

const rotations : Record<CardProps['angle'], string> = {
    left : '-rotate-5',
    right : 'rotate-5',
}

export default function Card({title, body, angle} : CardProps){
    return (
        <div className="relative bg-brandYellow rounded-[20%] w-70 h-50 items-center justify-center flex flex-col">
            <div className={`absolute -top-5 bg-black rounded-3xl text-center max-w-72 w-full font-semibold text-white p-2 ${rotations[angle]}`}>
                {title}
            </div>
            <p className="text-center text-lg p-6">
                {body}
            </p>
        </div>
    )
}