
type CardProps = {
    title : string;
    body : string;
    angle : 'left' | 'right';
    className?: string;
}

const rotations : Record<CardProps['angle'], string> = {
    left : '-rotate-5',
    right : 'rotate-5',
}

export default function Card({title, body, angle, className} : CardProps){
    return (
        <div className={`relative bg-brandYellow rounded-[2.5rem] md:rounded-[20%] md:max-w-xs h-45 md:h-50 items-center justify-center flex flex-col ${className}`}>
            <div className={`absolute -top-5 bg-black rounded-3xl text-center w-full font-extrabold font-tthoves text-lg text-white p-2 ${rotations[angle]}`}>
                {title}
            </div>
            <p className="text-center text-lg md:text-sm lg:text-lg px-8 mt-4 md:mt-6 lg:mt-0 md:px-6">
                {body}
            </p>
        </div>
    )
}