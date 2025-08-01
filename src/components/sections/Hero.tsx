import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="bg-[url('/hero-box.svg')] my-5 pt-5 md:pt-0 w-full aspect-[1072/617] bg-contain bg-no-repeat bg-center flex flex-col justify-center items-center">
            <h1 className="leading-none text-brandWhite text-4xl md:text-6xl font-black italic"> You Stream.</h1>
            <h2 className="leading-none text-brandWhite text-3xl md:text-5xl font-moisette font-extrabold"> We Grow Your Youtube.</h2>
            <Button className="mt-4 md:py-6"actionType="booking"> 
                <p className="font-bold text-xs md:text-lg">
                    See My Channel&apos;s 
                    <span className="font-moisette font-extrabold"> Potential</span>
                </p>
            </Button>
        </section>
    );
}