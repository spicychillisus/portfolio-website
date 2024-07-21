// project component display
import { SiTypescript, SiVisualstudiocode } from "react-icons/si";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
//import { useState, useEffect } from "react";
import { InterFont, MontserratFont, DM_SansFont } from "../../general/componentFonts";
import { projects } from "../projects";

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

const ProjectDisplay = (tittle: string, imageLink: string) => {
    return (
        <div className="bg-lightest-grey-ever border-border-brown rounded-2xl">
            <div className="relative text-center">
                <Image 
                src={imageLink}
                alt="project" 
                />
                <div className="w-full absolute top-0 left-0 text-center mt-10">
                    <h2 className="text-4xl font-bold text-red-500 text-center">
                        TailwindCSS + React
                    </h2>
                    <button className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Test Button
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDisplay;