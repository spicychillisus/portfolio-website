// project component display
import { SiTypescript, SiVisualstudiocode } from "react-icons/si";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaReact, FaNodeJs} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscCircleSmallFilled } from "react-icons/vsc";
import Link from "next/link";
import { useState, useEffect } from "react";
import { InterFont, MontserratFont, DM_SansFont } from "../../general/componentFonts";
import { projects } from "./projects";
import { languages } from "./languages";

interface ProjectDisplayProps  {
    title: string;
    imageLink: string;
    desc: string;
    status: string;
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




const ProjectDisplay = ({title, imageLink, desc}: ProjectDisplayProps) => {
    // imageLink will be used as the background. for now, it will be a placeholder
    return (
        <div className="bg-lightest-grey-ever border-border-brown rounded-2xl">
            <div className="pl-4">
                <div>
                    <h2 className={`text-black ${MontserratFont.className} text-3xl`}>{title}</h2>
                    <span className={`text-black ${DM_SansFont.className}`}>{desc}</span>
                </div>
                <div>
                    <span className={`${InterFont.className} text-black text-base`}>
                        {`Created On: ${formattedDate}`}
                    </span>

                </div>
            </div>
            
        </div>
    );
};

export default ProjectDisplay;

