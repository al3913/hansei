import Image from "next/image";
import {Footer} from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Card from "@/components/ui/Card";
import Features from "@/components/sections/Features";

export default function Home() {
  return (
    <div className="bg-brandWhite">
      <div className="flex min-h-screen max-w-screen-lg flex-col items-center justify-between mx-auto px-6">
          <Header/>
          <Hero/>
          <Problem/>
          <Solution/>
          <Features/>
          <Footer/>
      </div>
    </div>
  );
}
