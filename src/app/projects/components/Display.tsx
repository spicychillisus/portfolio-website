// project component display
import { SiTypescript, SiVisualstudiocode } from "react-icons/si";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import Link from "next/link";
import { InterFont, MontserratFont, DM_SansFont } from "./componentFonts";

type ProjectDisplayProps = {
    tittle: string;
};

const date = new Date();
const dateFormat = new Intl.DateTimeFormat(
    'en',
    {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
);
const formattedDate = dateFormat.format(date);
console.log(formattedDate); // for testing purposes

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({tittle}) => {
    return (
        <div className="bg-lightest-grey-ever border-border-brown">
            {/* status icon */}
            <div className="flex justify-items-end">

            </div>
            {/* main */}
            <h1 className={`${MontserratFont.className} text-black font-bold`}>
                {tittle}
            </h1>
            <div className="flex justify-center">
                <span className={`${InterFont.className}`}>
                    Created On: {formattedDate}
                </span>
                <span className={`${InterFont.className}`}>
                    Updated On: {formattedDate}
                </span>
            </div>
        </div>
    );
};

export default ProjectDisplay;