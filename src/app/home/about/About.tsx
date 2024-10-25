import * as fonts from "../../general/componentFonts";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Link from "next/link";

const moveUpHover = "ml-3 hover:translate-y-[-2px] transition-transform duration-300"
const spacing = "px-1"

const About = () => {
    return (
        <div className="pb-28">
            <h2 className={`${fonts.MontserratFont.className} text-center text-weird-brown text-4xl font-bold`}>
                About Me
            </h2>
            <p className="text-center px-36 text-black">
                Hello! My name is Asher, an aspiring software developer from Singapore with a passion to learn new things and meet new people.
                Everyday I always look forward to facing new challenges and solving problems, so I&apos;m always excited to what tomorrow brings for me.
                Currently I am a student in Singapore Polytechnic pursuing a Diploma in Information Technology, but that doesn&apos;t stop me from learning new things on my own.
            </p>
            <br />
            <p className="text-center text-black">
                Feel free to follow me or contact me on my social media pages here:
            </p>
            <div className="flex justify-center pt-2">
                <ul className="flex">
                    <li className={spacing}>
                        <Link href={"https://www.instagram.com/whoisasher_/"}>
                            <IoLogoInstagram size={40} className={moveUpHover} color="#833ab4"/>
                        </Link>
                    </li>
                    <li className={spacing}>
                        <Link href={"https://github.com/spicychillisus"}>
                            <FaGithub size={35} className={moveUpHover} color="#000000"/>
                        </Link>
                    </li>
                    <li className={spacing}>
                        <Link href={"https://www.linkedin.com/in/asher-reyes/"}>
                            <FaLinkedin size={35} className={moveUpHover} color="#0072b1"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;

