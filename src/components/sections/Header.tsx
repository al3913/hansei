import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header(){
    return (
        <header className="flex w-full items-center justify-between p-5 bg-brandBlue text-white">
            <Button variant="link" className="rounded-full" actionType="inProgress"> Hansei.GG </Button>
            <Image
              src="/mascot.svg"
              alt="Hansei Logo"
              width={50}
              height={50}
            />
            <Button className="rounded-full" actionType="booking"> Let's Chat </Button>
          </header>
    );
}