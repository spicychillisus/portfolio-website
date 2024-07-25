import Navbar from "../general/Navbar"
import Footer from "../general/Footer"
import ProjectDisplay from "./components/Display"
import { InterFont, MontserratFont, DM_SansFont } from "../general/componentFonts";
import HeroSection from "./components/heroSection";
import { metadata } from "../layout";

metadata.title = "Projects";

let imageLink = "./images/portfolio-web.png"; // test
const Projects = () => {
    return (
        <main className="bg-home-background">
            <Navbar />
            <HeroSection />
            <Footer />
        </main>
        
    )
}

export default Projects;