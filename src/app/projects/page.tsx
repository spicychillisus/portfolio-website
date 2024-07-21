import Navbar from "../general/Navbar"
import Footer from "../general/Footer"
import ProjectDisplay from "./components/Display"
import { InterFont, MontserratFont, DM_SansFont } from "./components/componentFonts";
import HeroSection from "./components/heroSection";

const Projects = () => {
    return (
        <main className="bg-home-background">
            <Navbar />
            <HeroSection />
        </main>
        
    )
}

export default Projects;