/* 
* This component will display the general information about me. This will be displayed on the home page.
* For the about me page with the long paragraphs and my stories, head over to the about-me folder.
*/

import DisplayLanguages from "./DisplayLanguages";
import About from "./About";
import ProjectDisplay from "./ProjectDisplay";

const AboutMe = () => {
    return (
        <>
        <About />
        <DisplayLanguages />
        <ProjectDisplay />
        </>
    )
}

export default AboutMe;