
/**
 * @author spicychillisus
 * link: https://github.com/spicychillisus/portfolio-website
 */

import { metadata } from "./layout";
import Navbar from "./general/Navbar";
import Footer from "./general/Footer";
import HeroSection from "./home/HeroSection";
import Head from "next/head";

export default function Home() {
  metadata.title = "home"; // tittle

  
  // displayed on website
  return (
    <main className="bg-home-background">
      <Navbar />
        
    </main>
  );
}
