import Image from "next/image";

export default function inProgress(){
    return (
        <div className = "flex flex-col items-center justify-center min-h-screen p-5 gap-4 bg-brandWhite">
            <Image
                src="/mascot/mascot-sweat.png"
                alt="Hansei Logo"
                width={200}
                height={200}
            />
            <h1 className="text-2xl lg:text-4xl"> This Page isn&apos;t Quite Ready Yet</h1>
            <p className="text-center"> 
                We&apos;re still editing behind the scenes. <br/>
                Just like your VODs, good things take a little time. <br/>
                In the meantime, keep streaming... we&apos;ve got the rest. 
            </p>
        </div>
    )
}