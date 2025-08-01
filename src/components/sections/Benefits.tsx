import Image from "next/image"
import Tile from "@/components/ui/Tile";

export default function Benefits() {
    return(
        <section className="relative m-5 flex flex-col gap-10 w-full justify-center items-center min-h-[700px]">
            <div className="md:absolute md:top-0 md:left-0 flex flex-col justify-center gap-5 text-start">
                <div className="flex flex-col w-fit justify-center items-center">
                    <h2 className="mb-0 leading-none font-bold">The</h2>
                    <h1 className="mt-0 leading-none text-brandBlue font-moisette font-extrabold">Potential.</h1>
                </div>
                <p>
                    What happens when your stream becomes
                    <br className="hidden md:block"/> a brand, and your content keeps working
                    <br className="hidden md:block"/>even when you&apos;re offline.
                </p>
            </div>
            <div className="md:absolute md:bottom-0 md:grid md:grid-cols-3 md:grid-rows-2 flex flex-col gap-8">
                <Tile
                    title="Build a Lasting Brand"
                    body="Create content that lives beyond your livestream."
                    angle = "leftFar"
                    className="col-start-1 row-span-2 place-self-center"
                />
                <Tile
                    title="Grow on Youtube Minus the Burnout"
                    body="Turn your Twitch grind into videos that keep growing while you're offline."
                    angle = "rightFar"
                    className="col-start-2 row-start-1"
                />
                <Tile
                    title="Get back your time"
                    body="No more endless hours editing, guessing thumbnails, or stressing over uploads."
                    angle = "left"
                    className="col-start-2 row-start-2"
                />
                <Tile
                    title="Attract Sponsors, Orgs, and New Fans"
                    body="Reach people who discover you beyond Twitch."
                    angle = "rightFar"
                    className="col-start-3 row-start-1"
                />
                <Tile
                    title="Turn content into another revenue stream"
                    body="YouTube opens the door to ad revenue, sponsorships, and new opportunities."
                    angle = "right"
                    className="col-start-3 row-start-2"
                />
            </div>
        </section>
    )
}