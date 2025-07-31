import Image from "next/image"

export default function Creators() {
    return(
        <section className="relative flex flex-col ">
            <div className="md:absolute md:top-0 md:left-0 flex flex-col justify-center gap-2 text-start">
                <h2>Creator</h2>
                <h1>Roster.</h1>
                <p>
                    A curated list of creators we&apos;ve <br/>
                    partnered with, past and present.
                </p>
            </div>
            <Image 
                src="/creators.svg"
                alt="Creator Roster - Reepal, Cloud805, CuddleCore, MizziMie, AtomicMari, PeachieTech, Tori Pareno, BasiilLeaf, Papalobster, IHeartJustice, Rikognition, VeeDotMe, James Chen (Jchensor), HideTone"
                width={1000}
                height={500}
                className="font-winnie"
            />
        </section>
    )
}