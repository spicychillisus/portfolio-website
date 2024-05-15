// it's so annoying that i have to place all my elements in a main class
// but i guess that's just how it is

import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1 className="text-center">test</h1>
    </main>
  );
}
