import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header(){
    return (
        <header className="flex w-full items-center justify-between p-5">
            <Button variant="link" className="rounded-full font-tthoves font-bold" actionType="inProgress"> Hansei.GG </Button>
            <Image
              src="mascot/mascot.svg"
              alt="Hansei Logo"
              width={50}
              height={50}
            />
            <Button variant="secondary" className="rounded-full font-bold" actionType="booking"> Let's Chat! </Button>
          </header>
    );
}