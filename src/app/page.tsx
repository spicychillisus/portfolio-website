// it's so annoying that i have to place all my elements in a main class

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { metadata } from "./layout";
import { 
  Inter, 
  Istok_Web
 } 
from "next/font/google";

const inter = Inter({
  weight: "500",
  subsets: ["latin"]
});
const istokWeb = Istok_Web({ 
  weight: "400", 
  subsets: ["latin"] 
});

export default function Home() {
  metadata.title = "home"; // tittle

  // displayed on website
  return (
    <main>
      <Navbar />
      <div className="content-center pr-16 pl-16">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gray-800 rounded-xl pl-2 pt-2 col-span-1">
              <h1 className="uppercase font-semibold text-center sm:text-md lg:text-2xl md:text-lg">contact information</h1>

            </div>
            <div className="bg-gray-800 rounded-xl pl-3 pt-2 pb-2 pr-2 lg:col-span-2 md:col-span-2">
              <h1 className="uppercase text-2xl font-bold pt-2">Introduction</h1>
              <p className="font-normal text-sm pb-4">
                Hello! My name is Asher, and I'm currently pursuing a Diploma in Information Technology in Singapore Polytechnic,
                specialising in Software Development. I decided to chose this pathway as since young, I've been really curious on how software and applications
                worked, as well as the technology and architecture behind a software and application.
              </p>
              <h3 className="uppercase">my hobbies</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                    yes
                </div>
                <div>
                    no
                </div>
              </div>
            </div>
            
        </div>
      </div>
      <Footer />
    </main>
  );
}
