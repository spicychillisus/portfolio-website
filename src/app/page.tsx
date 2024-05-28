// it's so annoying that i have to place all my elements in a main class

import Navbar from "./components/navbar";
import Footer from "./components/footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="content-center pr-16 pl-16">
        <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-800 rounded-xl pl-2 pt-2">
              <h1 className="uppercase text-2xl font-bold">Introduction</h1>
              <p className="font-normal">
                Hello! My name is Asher, and I'm currently pursuing a Diploma in Information Technology in Singapore Polytechnic,
                specialising in Software Development.</p>
            </div>
            <div className="bg-gray-800 rounded-xl">
              test
            </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
