import About from "@/components/About";
import Footer from "@/components/Footer";
import FadeIn from "@/components/framer-motion/FadeIn";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import Intro from "@/components/Intro";
import PlayGround from "@/components/PlayGround";
import { MouseFollower } from "@/components/ui/MouseFollower";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="bg-black">
      {/* <MouseFollower /> */}
      <Header />
      <Hero3 />
      <Intro />
      <Work />
      <PlayGround />
      <About />
      <Footer />
    </main>
  );
} 
