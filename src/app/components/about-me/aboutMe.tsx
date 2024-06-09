/* 
solely for the main page of the website
this component is to not be used anywhere else in the website
*/

//import { RandomPictureDisplay } from "@/app/photos/component/pictureDisplay";
import Project from "./project";

let projects = [
    {
        name: "Portfolio Website",
        description: "You are looking at it now! This website showcases my past projects and my resume. I built this website with Next.js and TailwindCSS.",
        link: "https://github.com/spicychillisus/portfolio-website"
    },
]

const AboutMe = () => {
    return (
        <div className="mt-2">
            <h2 className="font-bold text-5xl text-white text-center">
                About Me
            </h2>
            <div className="lg:pl-10 lg:pr-10 lg:ml-10 lg:mr-10 sm:text-center">
                <p className="text-center text-white mt-2 text-base">
                    I am currently a year 2 student in Singapore Polytechnic doing a Diploma in Information Technology, specialising in software
                    development. A fun fact about me is that on my birthday, both Shopee and Lazada have sales. 
                    During my free time, I enjoy doing photography, and like to primarily shoot vehicles and landscapes, as well as design posters and websites.
                </p>
                <p className="text-center text-white mt-2 text-base">
                    I was never good at programming in the first place; I even entered Polytechnic without any coding background.
                    But I'm always working hard to try and improve myself and my skills so that one day I could change the world with coding.
                </p>
            </div>

            <div>
                <h2 className="text-center text-white font-bold text-5xl mt-3">
                    What I Do
                </h2>
                <div className="grid lg:grid-cols-3 gap-4 mt-2 pt-2">
                    {projects.map((project) => (
                        <Project
                            tittle={project.name}
                            description={project.description}
                            link={project.link}
                            key={project.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutMe; 