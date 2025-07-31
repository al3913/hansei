
type CardProps = {
    title : string;
    body : string;
    angle : 'left' | 'right' | 'leftFar' | 'rightFar';
}

const rotations : Record<CardProps['angle'], string> = {
    leftFar : '-rotate-10',
    rightFar : 'rotate-10',
    left : '-rotate-5',
    right : 'rotate-5',
}

export default function Tile({title, body, angle} : CardProps){
    return (
        <div className="border-brandBlue rounded-[20%] max-w-xs h-50 items-center justify-center flex flex-col">
            <div className={`text-center w-full font-extrabold font-tthoves text-white p-2 ${rotations[angle]}`}>
                {title}
            </div>
            <p className="text-center text-lg p-6">
                {body}
            </p>
        </div>
    )
}