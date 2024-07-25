import { SiTypescript, SiVisualstudiocode } from "react-icons/si";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaReact, FaNodeJs, FaJava} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscCircleSmallFilled } from "react-icons/vsc";
import ProgressBar from 'react-bootstrap/ProgressBar';
import * as fonts from "../general/componentFonts";

const iconSize = 50;

const DisplayLanguages = () => {
    return (
        <div>
            <h2 className={`${fonts.MontserratFont.className} text-weird-brown text-center text-3xl font-bold`}>
                Programming Languages
            </h2>
            <div className="flex justify-center pt-4">
                <ul className="flex">
                    <li className="px-2">
                        <IoLogoJavascript size={iconSize} color="#fbbf24" className="ml-3"/>
                        <span>JavaScript</span>
                    </li>
                    <li className="px-2">
                        <FaJava size={iconSize} color="#fbbf24" className="ml-2"/>
                        <span className="flex justify-center">Java</span>
                    </li>
                    <li className="px-2">
                        <IoLogoHtml5 size={iconSize} color="#dc2626" className="ml-3"/>
                        <span>JavaScript</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DisplayLanguages;