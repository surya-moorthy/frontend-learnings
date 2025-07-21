import DashboardImg from "@/components/DashboardImg";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sliding from "@/components/Sliding";
import Image from "next/image";

export default function Home() {
  return (
     <div className="">
         <Navbar/>
         <Hero/>
         <Sliding />
         <DashboardImg/>
     </div>
  );
}
