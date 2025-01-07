"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { montserrat500, montserrat600, montserrat700, JetBrains, DMSans500, DMSans } from "@/fonts";
import { TypeAnimation } from 'react-type-animation';
import { Navbar, Projects } from "@/components/spicy";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Tooltip } from "@/components/ui/tooltip";

const socialLinks = [];

export default function MainPage() {

    const [pageComponent, setPageComponent] = useState(0);

    const leftArrow = ">>" + "";
    const rightArrow = "<<" + "";

    return (
        <div className="container">
            <Navbar />
            <div className="my-28">
                <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="flex justify-center items-center h-18"
                >
                    <h1 className={`${montserrat700.className} text-5xl text-weird-brown select-none`}>
                        Who am I?
                    </h1>
                </motion.div>
                <motion.div
                className="flex justify-center items-center select-none"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
                >
                    <span className={`${JetBrains.className} flex justify-center text-yes-grey 1em`}>
                        {leftArrow}
                        <span className="px-2">
                            I am a <TypeAnimation sequence={[
                                'programmer',
                                1000, 
                                'gamer',
                                1000,
                                'sleep deprived human being',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: "1em", display: 'inline-block' }}
                            repeat={Infinity}
                            />
                        </span>
                        {rightArrow}
                    </span>
                </motion.div> 
                <motion.div
                className="my-14"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.4 }}
                >
                    <h1 className={`flex justify-center ${DMSans500.className} text-xl select-none`}>
                        Contact me through:
                    </h1>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-3 gap-6">
                            <motion.div 
                            className="w-auto h-auto"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 10 }}
                            transition={{ duration: 2 }}
                            >
                                <Link 
                                href="https://www.instagram.com/whoisasher_/" 
                                className="cursor-pointer select-none w-auto h-auto"
                                >
                                    <FaInstagram 
                                        size={30}
                                        color="#E1306C"
                                    />
                                </Link>                   
                            </motion.div>
                            <motion.div 
                            className="w-auto h-auto"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 10 }}
                            transition={{ duration: 3 }}
                            >
                                <Link 
                                href="https://www.linkedin.com/in/asher-reyes/" 
                                className="cursor-pointer select-none w-auto h-auto"
                                >
                                    <FaLinkedin 
                                        size={30}
                                        color="#0A66C2"
                                        className="hover:text-white"
                                    />
                                </Link>                   
                            </motion.div> 
                            <motion.div 
                            className="w-auto h-auto"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 10 }}
                            transition={{ duration: 4 }}
                            >
                                <Link 
                                href="https://github.com/spicychillisus" 
                                className="cursor-pointer select-none w-auto h-auto"
                                >
                                    <FaGithub 
                                        size={30}
                                        color="#211F1F"
                                        className="hover:text-white"
                                    />
                                </Link>                   
                            </motion.div> 
                            
                        </div>
                    </div>
                </motion.div>
                <Projects />
            </div>
        </div>
    )
}