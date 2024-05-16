// it's so annoying that i have to place all my elements in a main class


import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="">
            <h1 className="uppercase font-bold text-center">all my works</h1>
      </div>
      <Footer />
    </main>
  );
}
