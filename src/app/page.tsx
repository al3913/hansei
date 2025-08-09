import {Footer} from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Creators from "@/components/sections/Creators";
import Benefits from "@/components/sections/Benefits";
import Final from "@/components/sections/Final";
import BlueLine from "@/components/decorations/BlueLine";
import RedLine from "@/components/decorations/RedLine";
import YellowLine from "@/components/decorations/YellowLine";


export default function Home() {
  return (
    <div className="relative bg-brandWhite z-0 overflow-x-hidden">
      <div className="flex min-h-screen max-w-screen-lg flex-col items-center justify-between mx-auto pt-30 gap-15 p-5 z-1">
          <Header className="fixed top-0 z-50"/>
          <Hero/>
          <Problem/>
          <Solution/>
          <Features/>
          <Creators/>
          <Benefits/>
          <Final/>
          <Footer/>
      </div>
    </div>
  );
}
