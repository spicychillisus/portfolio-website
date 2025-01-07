"use client";
import { Card, CardFooter, CardContent } from "../ui/card";
import { Tooltip } from "../ui/tooltip";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { montserrat, montserrat500, montserrat600, montserrat700 } from "@/fonts";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import Image from "next/image";
import homepage from "../../../public/homepage.png";

let projectsList = [
    {
        name: "project", // name of project
        description: "descript", // description
        link: "link", // (only display if hosted)
        github: "github", // link to the github repository
        tech_used: [], // what languages and frameworks were used
        image_url: "", // image url
    },
];

function getTechIcons(tech: any[]) {

}

const Projects = () => {
    return (
        <div className="flex justify-center mt-5">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 3 }}
            transition={{ duration: 2 }}
            >
                <h1 className={`${montserrat600.className} text-2xl select-none text-center`}>Projects</h1>
                <motion.div>
                    <div className={`container mt-3 grid grid-cols-${projectsList.length} flex flex-row`}>
                        <Card 
                        className="w-auto bg-white/60 h-72 border-white select-none" 
                        style={{
                            backgroundImage: `url(${homepage.src})`,
                            backgroundSize: "cover",
                            //backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "400%",
                            alignContent: "center"
                        }}
                        >
                            <CardContent>

                            </CardContent>
                            <CardFooter>
                                <div className="absolute bottom-0 left-0 p-2">
                                    <h2 className={`${montserrat700.className} font-bold text-2xl`}>test</h2> {/* project name */}
                                    <p>test</p> {/* project name */}
                                </div>
                            </CardFooter>
                        </Card>
                        
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Projects;