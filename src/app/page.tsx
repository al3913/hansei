import {Footer} from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import Creators from "@/components/sections/Creators";

export default function Home() {
  return (
    <div className="bg-brandWhite">
      <div className="flex min-h-screen max-w-screen-xl flex-col items-center justify-between mx-auto">
          <Header/>
          <Hero/>
          <Problem/>
          <Solution/>
          <Features/>
          <Creators/>
          <Footer/>
      </div>
    </div>
  );
}
