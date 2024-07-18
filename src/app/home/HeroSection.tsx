"use client"
import { DM_Sans, Montserrat, JetBrains_Mono, Inter } from "next/font/google";
import { TypeAnimation } from 'react-type-animation';
import {Button, ButtonGroup} from "@nextui-org/react";

// font declaration
const DMSansFont = DM_Sans({ weight: '500', subsets: ["latin"] });
const MontserratFont = Montserrat({ weight: '700', subsets: ["latin"] });
const jetBrains = JetBrains_Mono({ weight: '500', subsets: ["latin"] });
//const InterFont = Inter({ weight: '500', subsets: ["latin"] });

const leftArrow = ">>" + "";
const rightArrow = "<<" + "";

const fontSize = '1em';

const HeroSection = () => {
    return (
        <section className="pt-28">
            <div className="flex justify-center">
                <h1 className={`${MontserratFont.className} font-bold text-6xl text-weird-brown`}>
                    Who am I?
                </h1>
                
            </div>
            <span className={`${jetBrains.className} flex justify-center text-yes-grey ${fontSize}`}>
                {leftArrow}
                <span className="px-2">
                    I am a <TypeAnimation sequence={[
                        'programmer',
                        1000, 
                        'gamer',
                        1000,
                        'photographer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: `${fontSize}`, display: 'inline-block' }}
                    repeat={Infinity}
                    />
                </span>
                {rightArrow}
            </span>
            <div className="pt-2">
                <span className={`flex justify-center text-black text-lg font-medium ${DMSansFont.className}`}>
                    Get to know me!
                </span>
            </div>
            <div className="flex justify-center pt-2">
                <ButtonGroup className="px-2">
                    <Button>Projects</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button>Socials</Button>
                </ButtonGroup>
            </div>
            
        </section>
    )
}

export default HeroSection;