import Image from "next/image";
import RedLine from "../decorations/RedLine";

const storyboardNumbers = [
    {src : "/comic/burnt-out-1.png", alt: "Streamer streaming", layout: "responsive", width: 148, height: 147},
    {src : "/comic/burnt-out-2.png", alt: "Streamer editing, background clock ticking/moving", layout: "responsive", width: 148, height: 147},
    {src : "/comic/burnt-out-3.png", alt: "Streamer streaming but looking burnt out", layout: "responsive", width: 148, height: 147},
    {src : "/comic/burnt-out-4.png", alt: "Streamer laying on ground face up crying with head smoking", layout: "responsive", width: 148, height: 147}
];

export default function Problem() {
    return (
        <section className="relative m-5 pb-5 flex flex-col w-full justify-center items-center mx-aut gap-5">
            <h2 className="text-center text-xl md:text-2xl">
                You&apos;re <b><i>streaming regularly</i></b>, but <b><i>Youtube feels overwhelming.</i></b>
            </h2>
            <p className="text-center">
                <b>Editing takes forever, thumbnails feel random, and your channel doesn&apos;t reflect you.</b> You didn&apos;t start streaming to spend hours editing. Your Youtube should work for you not the other way around.
            </p>
            <div className="relative md:flex grid grid-cols-2 w-full md:flex-row gap-4 justify-center items-center">
                <RedLine className="max-h-9/10 scale-300"/>
                {storyboardNumbers.map((img) => (
                    <div key={crypto.randomUUID()}>
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