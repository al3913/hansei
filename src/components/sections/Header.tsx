import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header(){
    return (
        <header className="flex w-full items-center justify-between m-12">
            <Button variant="link" className="rounded-full font-tthoves text-xl sm:text-2xl font-extrabold p-0" actionType="inProgress"> Hansei.GG </Button>
            <Image
              src="mascot/mascot.svg"
              alt="Hansei Logo"
              width={50}
              height={50}
            />
            <Button variant="secondary" className="rounded-full bg-brandBlue font-bold py-6 px-8 text-xs sm:text-sm" actionType="booking"> Let&apos;s Chat! </Button>
          </header>
    );
}