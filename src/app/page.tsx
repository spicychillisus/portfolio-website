// it's so annoying that i have to place all my elements in a main class

//import Navbar from "./components/navbar/navbar";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { metadata } from "./layout";
import HeroSection from "./components/hero/heroSection";
import AboutMe from "./components/about-me/aboutMe";
import { useState, useEffect } from "react";


/* 
all of the components that are displayed on the website are placed here
*/

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
