// it's so annoying that i have to place all my elements in a main class

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="container mx-auto border">
        {/* border property is for visualisation */}
          <h1>test</h1>
      </div>
      
      
      <Footer />
    </main>
  );
}
