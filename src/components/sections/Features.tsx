import Card from "@/components/ui/Card";
import {CardProps} from "@/components/ui/Card";
import RedLine from "../decorations/RedLine";
import BlueLine from "../decorations/BlueLine";

const features : CardProps[] = [
    {
        title: "Titles & Thumbnails That Click",
        body: "Optimized to perform and reflect who you are.",
        angle: "left"
    },
    {
        title: "Ongoing Creator Check-ins",
        body: "Real conversations with a team that gets gaming, content, and where you're trying to go.",
        angle: "right"
    },
    {
        title: "Personalized Growth Strategy",
        body: "A long-term plan shaped around your voice, strengths, and goals. Not just what’s trending.",
        angle: "left"
    },
    {
        title: "Analytics That Drive Growth",
        body: "See what’s resonating and what to improve without getting lost in the numbers.",
        angle: "right"
    },
    {
        title: "Stream-to-YouTube Editing",
        body: "Smart, watchable cuts from your VODs. Built for YouTube, not just repurposed Twitch clips.",
        angle: "right"
    },
    {
        title: "Fully Done-for-You Publishing",
        body: "We handle uploads, scheduling, and optimization so you never have to worry about missing anything.",
        angle: "left"
    },
    
]

export default function Features() {
    return (
        <div className="relative flex flex-col lg:flex-row gap-15 m-5 w-full justify-between">
            <RedLine className="scale-600 md:scale-300 -rotate-15 top-[27%] md:top-[85%] lg:top-[78%] lg:-rotate-10"/>
            <BlueLine className="block md:hidden scale-600 rotate-15 top-[60%]"/>
            <RedLine className="block md:hidden scale-600 bottom-0 translate-y-3/4"/>
            <div className="flex flex-col items-center justify-center gap-15">
                <div className="text-center w-full flex justify-center lg:items-start flex-col gap-0">
                    <div className="flex lg:flex-col justify-center items-center lg:justify-start lg:items-start">
                        <h1 className="font-bold md:text-6xl">Plan.&nbsp;</h1>
                        <h1 className="font-bold md:text-6xl"> Produce.</h1>
                    </div>
                    <h1 className="font-extrabold font-moisette text-brandBlue text-7xl">Publish.</h1>
                </div>
                <div className="flex flex-col gap-15 md:hidden lg:flex">
                    {features.map((feature,index) => index % 3 === 0 ? <Card key={index} {...feature}/> : null)}
                </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-15 md:mt-10 md:hidden lg:flex">
                    {features.map((feature,index) => index % 3 === 1 ? <Card key={index} {...feature}/> : null)}
            </div>
            <div className="flex flex-col items-center justify-center gap-15 md:hidden lg:flex">
                    {features.map((feature,index) => index % 3 === 2 ? <Card key={index} {...feature}/> : null)}
            </div>
            <div className="hidden md:grid lg:hidden grid-cols-3 gap-10 w-full">
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        {...feature}
                    />
                ))}
            </div>
        </div>
    )
}

