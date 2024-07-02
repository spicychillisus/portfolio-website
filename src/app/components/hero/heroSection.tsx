"use client"
import photo from '../hero/photo.jpeg'
import Image from 'next/image';
import Link from 'next/link';
import {Button, ButtonGroup} from "@nextui-org/button";
import { TypeAnimation } from 'react-type-animation';
import CustomButton from '../custom-button/customBtn';





const HeroSection = () => {
    return (
        <section className="mt-6 mb-10 pt-6 pb-10 sm:flex sm:justify-center">
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
                <div className="col-span-2">
                    <h1 className="text-white lg:text-left sm:text-center font-bold text-4xl lg:text-6xl mb-3 mt-3">
                        Hello, I'm Asher Reyes
                    </h1>
                    <p className="text-lg md:text-base sm:text-sm">
                        <span>
                            I do {" "}
                        </span> 
                        <TypeAnimation
                            sequence={[
                                
                                'coding',
                                1000, 
                                'photography',
                                1000,
                                'design',
                                1000,
                                'gaming',
                                1000
                            ]}
                            wrapper="span"
                            speed={20}
                            style={{ 
                                fontSize: '1em', 
                                display: 'inline-block' 
                            }}
                            repeat={Infinity}
                        />
                    </p>
                    
                    
                    {/* small grid for the buttons */}
                    <div className="grid grid-cols-6 gap-10 mt-3">
                        <div className='col-span-2 bg-gradient-to-r from-indigo-800 to-purple-900 rounded-3xl lg:h-10'>
                            <Link href="/resume">
                                <li className='text-white font-medium list-none text-center mt-2'>Resume</li>
                            </Link>
                        </div>
                        <div className='col-span-2 bg-gradient-to-r from-indigo-800 to-purple-900 rounded-3xl'>
                            <Link href="/projects">
                                <li className='text-white font-medium list-none text-center mt-2'>Projects</li>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="sm:flex justify-center">
                    <Image src={photo} 
                        alt="photo" 
                        width={500} 
                        height={500} 
                        className='rounded-3xl'
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;