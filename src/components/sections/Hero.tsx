import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="bg-[url('/hero-box.svg')] w-full aspect-[1072/617] bg-contain bg-no-repeat bg-center flex flex-col justify-center items-center">
            <h1 className="text-brandWhite text-3xl font-black italic"> You Stream.</h1>
            <h2 className="text-brandWhite text-2xl font-moisette font-extrabold"> We Grow Your Youtube.</h2>
            <Button className="mt-4 rounded-"actionType="booking"> 
                <p className="font-bold text-xs">
                    See My Channel&apos;s 
                    <span className="font-moisette font-extrabold"> Potential</span>
                </p>
            </Button>
        </section>
    );
}