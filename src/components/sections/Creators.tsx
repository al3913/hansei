import Image from "next/image"

export default function Creators() {
    return(
        <section className="relative m-5 flex flex-col gap-5 w-full justify-center items-center min-h-[500px]">
            <div className="md:absolute md:top-0 md:left-0 flex flex-col justify-center gap-5 text-start">
                <div className="">
                    <h2 className="mb-0 leading-none font-bold">Creator</h2>
                    <h1 className="mt-0 leading-none text-brandRed font-moisette font-extrabold">Roster.</h1>
                </div>
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