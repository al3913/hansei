import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="bg-[url('/hero-box.svg')] w-full aspect-[1072/617] bg-contain bg-no-repeat bg-center flex flex-col justify-center items-center">
            <h1 className="text-brandWhite"> You Stream.</h1>
            <h2 className="text-brandWhite"> We Grow Your Youtube.</h2>
            <Button className="mt-4"actionType="booking"> See My Channel's Potential</Button>
        </section>
    );
}