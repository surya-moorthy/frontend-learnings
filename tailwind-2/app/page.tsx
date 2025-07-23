
import DashboardImg from "@/components/DashboardImg";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sliding from "@/components/Sliding";
import Designer from "./designers";
import Developers from "./developers";
import Footer from "@/components/Footer";
import Marketers from "./marketers";

export default function Home() {
  return (
    <div className="max-w-full bg-neutral-50">
      
      <Navbar/>
    
     <div className="flex flex-col justify-center m-auto max-w-[1250px] pt-10 ">
        <div>
             <Hero/>
              <Sliding />
              <DashboardImg/>
        </div>
       <Designer/>
       <Developers/>
       <Marketers/>
      </div>
      <Footer/>
     </div>
  );
}
