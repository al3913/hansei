import Image from "next/image";

const storyboardNumbers = [
    {src : "/comic/burnt-out-1.png", alt: "Streamer streaming", layout: "responsive", width: 148, height: 147},
    {src : "/comic/burnt-out-2.png", alt: "Streamer editing, background clock ticking/moving", layout: "responsive", width: 148, height: 147},
    {src : "/comic/burnt-out-3.png", alt: "Streamer streaming but looking burnt out", layout: "responsive", width: 148, height: 147},
    {src : "/comic/burnt-out-4.png", alt: "Streamer laying on ground face up crying with head smoking", layout: "responsive", width: 148, height: 147}
];

export default function ProblemStatement() {
    return (
        <section className="relative flex flex-col w-full justify-center items-center mx-auto">
            <h3 className="text-center">
                You're <b><i>streaming regularly</i></b>, but <b><i>Youtube feels overwhelming.</i></b>
            </h3>
            <p className="text-center">
                <b>Editing takes forever, thumbnails feel random, and your channel doesn't reflect you.</b> You didn't start <br/> streaming to spend hours editing. Your Youtube should work for you not the other way around.
            </p>
            <div className="flex flex-col w-full md:flex-row gap-4 justify-center items-center">
                {storyboardNumbers.map((img) => (
                    <div>
                        <Image
                            key={crypto.randomUUID()}
                            className="w-full h-full object-contain"
                            {...img}
                        />
                    </div>
                ))}
            </div>
            <p className="absolute bottom-0 right-0 text-xs text-muted-foreground">
                Art by <i>Ematurist</i>
            </p>
        </section>
    );
}