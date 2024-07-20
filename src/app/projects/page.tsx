import Navbar from "../general/Navbar"
import Footer from "../general/Footer"
import ProjectDisplay from "./components/Display"
import { InterFont, MontserratFont, DM_SansFont } from "./components/componentFonts";


const Projects = () => {
    return (
        <div className="bg-lightest-grey-ever border-border-brown">
            <h1 className={`${MontserratFont.className} text-weird-brown font-bold`}>
                Projects
            </h1>
            <div className="flex justify-center">
                <span className={`${DM_SansFont.className} font-medium text-left`}>
                    A collection of my current, past and in development projects
                </span>
                <span className={`${DM_SansFont.className} font-medium text-left`}>
                    View All Projects at https://github.com/spicychillisus
                </span>
            </div>
        </div>
    )
}

export default Projects;