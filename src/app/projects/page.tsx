
/**
 * update: i decided to move the project component to the projects page as there could be more projects that 
 * i will add in the future
 * @author spicychillisus
 * @link https://github.com/spicychillisus
 * @version 1.0
 */

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Project from "./components/project";
// this hero section is different from the one in the index page
import HeroSection from "./components/HeroSection"; 
import { metadata } from "../layout";

metadata.title = "projects";

// status can only be either work in progress or completed
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

export default function Projects() {
    return (
        <main>
            <Navbar/>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 mt-2 pt-2 pl-4 pr-4 pb-4">
                    {projects.map((project) => (
                        <Project
                            //key={project.name}
                            image={project.image}
                            tittle={project.name}
                            description={project.description}
                            link={project.link}
                            status={project.status}
                        />
                    ))
                    }
                </div>
            <Footer/>
        </main>
    )
}