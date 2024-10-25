/* 
* This component will display the general information about me. This will be displayed on the home page.
* For the about me page with the long paragraphs and my stories, head over to the about-me folder.
*/

import DisplayLanguages from "../display/DisplayLanguages";
import About from "./About";
import ProjectHero from "../project/HeroSection";

const AboutMe = () => {
    return (
        <>
        <About />
        <DisplayLanguages />
        <ProjectHero />
        </>
    )
}

export default AboutMe;