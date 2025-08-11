
type CardProps = {
    title : string;
    body : string;
    angle : 'left' | 'right' | 'leftFar' | 'rightFar';
    className?: string;
}

const rotations : Record<CardProps['angle'], string> = {
    leftFar : '-rotate-10',
    rightFar : 'rotate-10',
    left : '-rotate-5',
    right : 'rotate-5',
}

export default function Tile({title, body, angle, className} : CardProps){
    return (
        <div className={`border-3 border-brandBlue rounded-[20%] max-w-3xs md:max-w-[14rem] lg:max-w-3xs h-75 items-center justify-around flex flex-col ${className} ${rotations[angle]}`}>
            <h3 className="w-full text-center text-4xl/7 md:text-3xl p-6 pb-0 font-winnie font-extrabold">
                {title}
            </h3>
            <p className="text-center text-base p-6 pt-0">
                {body}
            </p>
        </div>
    )
}