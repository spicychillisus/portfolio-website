/*

this project was done by spicychillisus on github beacuse he wanted to show to his future employers that
he can code and make a website from scratch.

keep in mind i had no knowledge of nextjs or react before doing this project so if i can do it so can you

*/

/**
 * @author spicychillisus
 * link: 
 */
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { metadata } from "./layout";
import HeroSection from "./components/hero/heroSection";
import AboutMe from "./components/about-me/aboutMe";


export default function Home() {
  metadata.title = "home"; // tittle

  // displayed on website
  return (
    <main>
      <Navbar />
      <div className="content-center pr-16 pl-16"> {/* container */}
        <HeroSection />
        <AboutMe />   
      </div>
      

      <Footer />
    </main>
  );
}
