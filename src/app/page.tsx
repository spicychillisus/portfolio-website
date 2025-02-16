
/**
 * @author spicychillisus
 * this is the home page of the website
 * link: https://github.com/spicychillisus/portfolio-website
 */

import { metadata } from "./layout";
import Start from "./Starter";
import MainPage from "./Home";

export default function Home() {
  metadata.title = "home"; // tittle

  
  // displayed on website
  return (
    <main className="bg-home-background w-screen h-screen overflow-hidden">
      {/* <Start /> */}
      <MainPage />
    </main>
  );
}
