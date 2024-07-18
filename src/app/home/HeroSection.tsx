"use client"
import { DM_Sans, Montserrat, JetBrains_Mono, Inter } from "next/font/google";
import { TypeAnimation } from 'react-type-animation';
import {Button, ButtonGroup} from "@nextui-org/button";
import { CustomButton } from "../general/buttons/buttons";

// font declaration
const DMSansFont = DM_Sans({ weight: '500', subsets: ["latin"] });
const MontserratFont = Montserrat({ weight: '700', subsets: ["latin"] });
const jetBrains = JetBrains_Mono({ weight: '500', subsets: ["latin"] });
const InterFont = Inter({ weight: '500', subsets: ["latin"] });

const leftArrow = ">>" + "";
const rightArrow = "<<" + "";

const fontSize = '1em';

const HeroSection = () => {
    return (
        <section className="pt-28">
            <div className="flex justify-center">
                <h1 className={`${MontserratFont.className} font-bold text-5xl text-weird-brown`}>
                    Who am I?
                </h1>
                
            </div>
            <span className={`${jetBrains.className} flex justify-center text-yes-grey`}>
                {leftArrow}
                <span>
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
        </section>
    )
}

export default HeroSection;