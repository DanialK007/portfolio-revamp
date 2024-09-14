import About from "@/components/About";
import Footer from "@/components/Footer";
import FadeIn from "@/components/framer-motion/FadeIn";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import PlayGround from "@/components/PlayGround";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Work />
      <PlayGround />
      <About />
      <Footer />
    </>
  );
} 
