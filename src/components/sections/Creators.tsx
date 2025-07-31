import Image from "next/image"

export default function Creators() {
    return(
        <section className="relative flex flex-col w-full justify-center items-center bg-[url('/creators-bg.svg')] bg-cover bg-no-repeat aspect-[1072/617]">
            <div className="md:absolute md:top-0 md:left-0 flex flex-col justify-center gap-2 text-start">
                <h2>Creator</h2>
                <h1>Roster.</h1>
                <p>
                    A curated list of creators we&apos;ve <br/>
                    partnered with, past and present.
                </p>
            </div>
            <div className="md:absolute md:bottom-0 md:right-0 w-9/10">
                <Image 
                src="/creators.svg"
                alt="Creator Roster - Reepal, Cloud805, CuddleCore, MizziMie, AtomicMari, PeachieTech, Tori Pareno, BasiilLeaf, Papalobster, IHeartJustice, Rikognition, VeeDotMe, James Chen (Jchensor), HideTone"
                width={1000}
                height={500}
                className="w-full h-full object-contain"
            />
            </div>
        </section>
    )
}