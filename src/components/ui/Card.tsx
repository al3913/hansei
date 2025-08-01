
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
        <div className="relative bg-brandYellow rounded-[2.5rem] md:rounded-[20%] md:max-w-xs h-45 md:h-50 items-center justify-center flex flex-col">
            <div className={`absolute -top-5 bg-black rounded-3xl text-center w-full font-extrabold font-tthoves text-lg text-white p-2 ${rotations[angle]}`}>
                {title}
            </div>
            <p className="text-center text-lg p-8 pt-12 md:p-6">
                {body}
            </p>
        </div>
    )
}