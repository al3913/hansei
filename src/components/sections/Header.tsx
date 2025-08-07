import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header( {className, ...props} : React.HTMLAttributes<HTMLElement>){
    return (
      <header className={`flex w-full bg-brandWhite items-center justify-between px-5 md:px-10 py-5 border-2 ${className}`} {...props}>
            <Button variant="link" className="rounded-full font-tthoves text-xl sm:text-2xl font-extrabold p-0" actionType="home"> Hansei.GG </Button>
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