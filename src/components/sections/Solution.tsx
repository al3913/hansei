import Image from "next/image";
import { Button } from "@/components/ui/button";

const storyboardNumbers = [
    {src : "/comic/burnt-out-1.png", alt: "Streamer streaming", layout: "responsive", width: 148, height: 147},
    {src : "/comic/burnt-out-2.png", alt: "Streamer editing, background clock ticking/moving", layout: "responsive", width: 148, height: 147},
    {src : "/comic/burnt-out-3.png", alt: "Streamer streaming but looking burnt out", layout: "responsive", width: 148, height: 147},
    {src : "/comic/burnt-out-4.png", alt: "Streamer laying on ground face up crying with head smoking", layout: "responsive", width: 148, height: 147}
];

export default function Solution() {
    return (
        <section className="relative my-5 pb-5 flex items-center justify-center gap-4">
            <div className="flex flex-col justify-center items-start text-xs md:text-sm w-1/2 gap-4">
                <div>
                    <h2 className="text-left font-bold"> Your dream </h2>
                    <h1 className="text-brandBlue font-moisette font-extrabold"> Outcome. </h1>
                </div>
                <p className="text-md"><b>We turn your Twitch Streams into videos that work for you. Even when you&apos;re offline.</b></p>
                <p> Your content will keep building views, subs, and income while you focus on streaming. </p>
                <Button variant="default" actionType="booking" className="inline-flex items-center gap-1 text-xs md:text-base"><p className="text-xs font-bold">Show me what is <i className="font-moisette font-extrabold">Possible</i></p></Button>
            </div>
            <div className="relative flex flex-col md:grid md:grid-cols-2 gap-2 pl-10 w-1/2">
                {storyboardNumbers.map((img) => (
                    <div className="h-4/5" key={crypto.randomUUID()}>
                        <Image
                            className="w-full h-full object-contain"
                            {...img}
                        />
                    </div>
                ))}
            </div>
            <p className="absolute bottom-0 right-0 text-xs">
                Art by <i>Ematurist</i>
            </p>
        </section>
    );
}