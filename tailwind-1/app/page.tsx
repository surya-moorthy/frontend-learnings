import Container from "@/components/series/Container";
import Hero from "@/components/series/Hero";
import { Navbar } from "@/components/series/navbar";

export default function Home() {
  return (
   <div className="layout">
      <Container>
          <div className='left-line'/>
          <Navbar/>
          <Hero/>
          <div className='right-line'/>
          <div className="hero-image-container">
            <div className="horizontal-line"/>
            <img src="/image.png" alt="" className="hero-image"/>
          </div>
      </Container>
   </div>
  );
}
