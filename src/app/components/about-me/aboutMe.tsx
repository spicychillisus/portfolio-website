/* 
solely for the main page of the website
this component is to not be used anywhere else in the website
*/

//import { RandomPictureDisplay } from "@/app/photos/component/pictureDisplay";
//import { image } from "@nextui-org/theme";
import Project from "./project";


let projects = [
    {
        image: "",
        name: "Portfolio Website",
        description: "You are looking at it now! This website showcases my past projects and my resume. I built this website with Next.js and TailwindCSS.",
        link: "https://github.com/spicychillisus/portfolio-website",
        status: "Work In Progress"
    },
    {
        image: "",
        name: "Portfolio Website made with Bootstrap",
        description: "This portfolio website was made for a school project and was built with Bootstrap. This website showcases about sustainability",
        link: "https://github.com/spicychillisus/fed-ca1-dcitp",
        status: "Completed"
    },
    {
        image: "",
        name: "Gamified Sustainability Website",
        description: "This website site was a full-stack project for school that gamifies sustainability tasks. Players can complete tasks and earn points and use those points to purchase vehicles.",
        link: "https://github.com/spicychillisus/bed-ca2-public",
        status: "Completed"
    }
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
                    development. During my free time, I enjoy doing photography, and like to primarily shoot vehicles and landscapes, as well as design posters and websites.
                </p>
                <p className="text-center text-white mt-2 text-base">
                    I was never good at programming in the first place; I even entered Polytechnic without any coding background.
                    But I'm always working hard to try and improve myself and my skills so that one day I could change the world with coding.
                </p>
            </div>

            <div className="mt-2 ml-4 mr-4">
                <h2 className="text-center text-white font-bold text-5xl mt-3">
                    My Works
                </h2>
                <p className="text-center text-white font-normal text-base mt-2">
                    These are some of my projects that I have worked on in the past.
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 mt-2 pt-2 pl-4 pr-4">
                    {projects.map((project) => (
                        <Project
                            image={project.image}
                            tittle={project.name}
                            description={project.description}
                            link={project.link}
                            status={project.status}
                        />
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default AboutMe; 