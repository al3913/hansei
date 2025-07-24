import Image from "next/image";
import {Footer} from "@/components/sections/Footer";

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col items-center justify-between">
          <Footer/>
      </div>
  );
}
