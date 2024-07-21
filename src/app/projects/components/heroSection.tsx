import Navbar from "@/app/general/Navbar"
import Footer from "@/app/general/Footer"
import ProjectDisplay from "../components/Display"
import { InterFont, MontserratFont, DM_SansFont } from "../../general/componentFonts";


const HeroSection = () => {
    return (
        <div>
            <h1 className={`${MontserratFont.className} text-weird-brown font-bold text-center text-4xl`}>
                Projects
            </h1>
            <div className="text-black">
                <div className="flex justify-center">
                    <span className={`${DM_SansFont.className} font-medium text-left`}>
                        A collection of my current, past and in development projects
                    </span>
                    
                </div>
                <div>
                    <span className={`${DM_SansFont.className} font-medium text-left flex justify-center`}>
                        View All Projects at
                        <a href="https://github.com/spicychillisus">
                            https://github.com/spicychillisus
                        </a>
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default HeroSection;