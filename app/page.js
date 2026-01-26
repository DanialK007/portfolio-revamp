import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import PlayGround from "../components/PlayGround";
import Work from "../components/Work";

export default function Home() {
  return (
    <main className="bg-black">

      <Header />
      <Hero />
      <Intro />
      <Work />
      <PlayGround />
      <About />
      <Footer />
    </main>
  );
}
