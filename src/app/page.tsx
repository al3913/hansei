import {Footer} from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Creators from "@/components/sections/Creators";
import Benefits from "@/components/sections/Benefits";

export default function Home() {
  return (
    <div className="bg-brandWhite">
      <div className="flex min-h-screen max-w-screen-lg flex-col items-center justify-between mx-auto p-5">
          <Header/>
          <Hero/>
          <Problem/>
          <Solution/>
          <Features/>
          <Creators/>
          <Benefits/>
          <Footer/>
      </div>
    </div>
  );
}
