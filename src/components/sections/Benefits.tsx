import Image from "next/image"

export default function Benefits() {
    return(
        <section className="relative m-5 flex flex-col gap-5 w-full justify-center items-center bg-[url('/creators-bg.svg')] bg-cover bg-no-repeat aspect-[1072/617]">
            <div className="md:absolute md:top-0 md:left-0 flex flex-col justify-center gap-5 text-start">
                <div className="">
                    <h2 className="mb-0 leading-none font-bold">The</h2>
                    <h1 className="mt-0 leading-none text-brandBlue font-moisette font-extrabold">Potential.</h1>
                </div>
                <p>
                    What happens when your stream becomes
                    a brand, and your content keeps working
                    even when you&apos;re offline.
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