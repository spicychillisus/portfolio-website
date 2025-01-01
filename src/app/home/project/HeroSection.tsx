import * as font from  "@/app/general/componentFonts";
import { languages } from "@/app/projects/components/languages";
import Project from "@/components/Project";



const ProjectHero = () => {
    return (
        <div className="flex justify-center translate-y-4">
            {/* content */}
            <div className="text-center px-24">
                <h2 className={`${font.MontserratFont} text-weird-brown text-3xl font-bold`}>Projects</h2>
                <p className={`${font.InterFont} text-black`}>
                    I've embarked on different projects throughout my time as a student in Singapore 
                    Polytechnic in order to enhance my learning and 
                    grow my skillset. Below are just some of the projects that I've embarked on, and I'm excited to embark on
                    more!
                </p>
            </div>
            {
            /* project display */
            
            

            }

        </div>
    )
}

export default ProjectHero;