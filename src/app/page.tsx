import Image from "next/image";
import {Footer} from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="bg-brandWhite">
      <div className="flex min-h-screen max-w-screen-lg flex-col items-center justify-between mx-auto px-6">
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

          <Hero />

          <Footer/>
      </div>
    </div>
  );
}
