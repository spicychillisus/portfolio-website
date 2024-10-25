
/**
 * @author spicychillisus
 * this is the home page of the website
 * link: https://github.com/spicychillisus/portfolio-website
 */

import { metadata } from "./layout";
import Navbar from "./general/Navbar";
import Footer from "./general/Footer";
import HeroSection from "./home/header/HeroSection";
import AboutMe from "./home/about/aboutMe";

export default function Home() {
  metadata.title = "home"; // tittle

  
  // displayed on website
  return (
    <main className="bg-home-background w-screen min-h-screen overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Footer />
    </main>
  );
}
