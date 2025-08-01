import Image from "next/image"

// Creator Roster on one line for mobile

export default function Creators() {
    return(
        <section className="relative m-12 flex flex-col w-full justify-center items-center md:min-h-[575px] gap-5">
            <div className="md:absolute md:top-0 md:left-0 flex flex-col w-full justify-start gap-2 md:gap-5 text-start">
                <div className="flex flex-row md:flex-col">
                    <h2 className="md:-mb-2 leading-none font-bold text-5xl md:text-6xl">Creator</h2>
                    <h1 className="mt-0 leading-none text-brandRed font-moisette text-[56px] md:text-7xl font-extrabold">Roster.</h1>
                </div>
                <p className="ml-1 md:ml-0">
                    A curated list of creators <br className="block md:hidden"/> we&apos;ve <br className="hidden md:block"/>
                    worked with, <br className="block md:hidden"/> past and present.
                </p>
            </div>
            <div className="md:absolute md:bottom-0 md:right-0 w-full md:w-9/10 -mt-10">
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