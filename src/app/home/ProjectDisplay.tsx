import Project from "./Project"
import { projects } from "./projectsList"
import * as fonts from "../general/componentFonts"

const ProjectDisplay = () => {
    return (
        <main>
            <h2 className={`${fonts.MontserratFont.className} text-weird-brown text-center text-3xl font-bold pt-10`}>
                Projects
            </h2>
            <p className="md:lg:px-60 text-black text-center">
                Some of my past, current and work in progress projects
            </p>
            <div className="grid lg:grid-cols-2 md:grid-cols-3 gap-4 mt-2 pt-2 px-28 pb-4">
                {projects.map((project) => (
                    <Project
                        key={project.name}  // Add the key prop here
                        tittle={project.name}
                        description={project.description}
                        link={project.link}
                        status={project.status}
                    />
                ))}
            </div>
        </main>
    )
}

export default ProjectDisplay;