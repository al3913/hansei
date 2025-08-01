import { Button } from "../ui/button";

export default function Final() {
    return (
        <div className="my-15 md:m-15 text-center md:text-left w-full flex justify-center md:items-start flex-col">
            <h1 className="font-bold md:text-5xl">
                Your Twitch  
                <br className="block md:hidden"/>&nbsp;Content is Full of
            </h1>
            <div className="flex flex-col md:flex-row -mt-2 md:gap-5">
                <h1 className="font-extrabold font-moisette text-brandBlue md:-ml-2.5 text-[84px] -ml-2"> Untapped</h1>
                <h1 className="font-extrabold font-moisette text-brandBlue text-[84px] -mr-2 -mt-2 md:-mt-0"> Potential. </h1>
            </div>

            <h3 className="font-moisette font-extrabold text-2xl mt-10"> Let&apos;s Unlock It Together! </h3>
            <p className="my-3">
                Stop leaving views and growth on the table. Let&apos;s chat and figure 
                <br className="hidden md:block"/>out how we can grow your channel without the extra stress.
            </p>
            <Button variant="default" actionType="booking" className="inline-flex items-center gap-1 -m-1 mt-1 p-6"><p className="text-lg font-bold">See my Channel&apos;s <i className="font-moisette font-extrabold">Potential</i></p></Button>
        </div>
    );
}