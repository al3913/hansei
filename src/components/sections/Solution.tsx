import Image from "next/image";
import { Button } from "@/components/ui/button";
import BlueLine from "../decorations/BlueLine";

const storyboardNumbers = [
    {src : "/comic/1-solution.png", alt: "Streamer streaming", layout: "responsive", width: 148, height: 147},
    {src : "/comic/2-solution.png", alt: "Streamer on call with Hansei", layout: "responsive", width: 148, height: 147},
    {src : "/comic/3-solution.png", alt: "Streamer streaming while Hansei is creating videos", layout: "responsive", width: 148, height: 147},
    {src : "/comic/4-solution.png", alt: "Streamer celebrating their growth", layout: "responsive", width: 148, height: 147}
];

export default function Solution() {
    return (
        <section className="relative my-5 pb-5 flex flex-col md:flex-row items-center justify-center gap-4">
            <BlueLine className="hidden md:block top-[80%] lg:top-[67%] scale-300"/>
            <div className="flex flex-col p-3 md:p-0 justify-center items-start text-xs md:text-sm w-full md:w-1/2 gap-4">
                <div className="-m-2">
                    <h2 className="text-left -mb-2 leading-none pl-4 font-bold text-3xl"> Your dream </h2>
                    <h1 className="text-brandBlue mt-0 leading-none font-moisette font-extrabold text-7xl"> Outcome. </h1>
                </div>
                <p className="text-md">
                    <b>
                        We turn your Twitch Streams into videos that 
                        <br className="hidden lg:block"/> work for you. Even when you&apos;re offline.
                    </b>
                </p>
                <p> 
                    Your content will keep building views, subs, and&nbsp;
                    <br className="hidden lg:block"/>income while you focus on streaming. 
                </p>
                <Button variant="default" actionType="booking" className="inline-flex items-center gap-1 -m-1 mt-1 p-6"><p className="text-sm md:text-base font-bold">Show me what is <i className="font-moisette font-extrabold">Possible</i></p></Button>
            </div>
            <div className="relative flex flex-col grid grid-cols-2 gap-2 w-full md:w-3/5">
                <BlueLine className="block md:hidden max-h-9/10 top-[43%] scale-300"/>
                {storyboardNumbers.map((img) => (
                    <div className="h-4/5" key={crypto.randomUUID()}>
                        <Image
                            className="w-full h-full object-contain"
                            {...img}
                        />
                    </div>
                ))}
            </div>
            <p className="absolute bottom-0 right-0 text-[10px] md:text-xs">
                Art by <i>Ematurist</i>
            </p>
        </section>
    );
}