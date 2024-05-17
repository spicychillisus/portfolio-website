// it's so annoying that i have to place all my elements in a main class

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="uppercase text-center border border-white ml-32 mr-32">
          <h1 className="text-4xl font-bold">all my works</h1>
          <span className="text-lg">here in one page</span>
      </div>
      
      <Footer />
    </main>
  );
}
