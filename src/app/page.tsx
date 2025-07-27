import Image from "next/image";
import {Footer} from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";


function goToBooking() {
  window.location.href = "https://www.hansei.gg/booking"; // Replace with your booking URL
}


export default function Home() {
  return (
    <div className="bg-brandWhite">
      <div className="flex min-h-screen max-w-screen-lg flex-col items-center justify-between mx-auto px-6">
          <header className="flex w-full items-center justify-between p-5 bg-brandBlue text-white">
            <Button variant="link" className="rounded-full"> Hansei.GG </Button>
            <Image
              src="/mascot-sweat.png"
              alt="Hansei Logo"
              width={50}
              height={50}
            />
            <Button className="rounded-full"> Let's Chat </Button>
          </header>
          <Footer/>
      </div>
    </div>
  );
}
