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
      <div className="absolute inset-0 z-[-1] -mt-15">
        {/* <RedLine className="top-225 scale-600 md:scale-150 md:top-250"/> */}
        <BlueLine className="top-430 scale-450 md:top-410 md:scale-170 md:-rotate-3"/>
        <RedLine className="top-610 md:top-630 scale-600 md:scale-150 -rotate-15"/>
        <BlueLine className="block md:hidden scale-550 top-800 rotate-15"/>
        <RedLine className="block md:hidden top-900 scale-450 "/>
        <BlueLine className="hidden md:block md:scale-115 rotate-5 md:top-1048"/>
        <YellowLine className="top-1025 scale-400 md:-left-200 md:top-815 md:scale-105"/>
        <YellowLine className="block md:hidden top-1520 scale-450 rotate-15 md:-left-200 md:top-780 md:scale-150"/>
      </div>
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
