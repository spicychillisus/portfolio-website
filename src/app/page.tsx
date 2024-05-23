// it's so annoying that i have to place all my elements in a main class

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Introduction from "./components/introduction";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Introduction />
    </main>
  );
}
