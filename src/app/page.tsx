
/**
 * @author spicychillisus
 * link: https://github.com/spicychillisus/portfolio-website
 */

import { metadata } from "./layout";
import Navbar from "./general/Navbar";
import Footer from "./general/Footer";
import HeroSection from "./home/HeroSection";
import AboutMe from "./home/aboutMe";

export default function Home() {
  metadata.title = "home"; // tittle

  
  // displayed on website
  return (
    <main className="bg-home-background">
      {/* for temporary purposes,  the navbar will not be displayed */}
      {/* <Navbar /> */}
      <HeroSection />
      <AboutMe />
      <Footer />
    </main>
  );
}
