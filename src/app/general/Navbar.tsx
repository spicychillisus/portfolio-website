"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

let buttonPosition = "h-5 w-5";

const InterFont = Inter({ weight: '500', subsets: ["latin"] });
const navbarBackground = "h-full w-full bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100"
const centerClass = "flex justify-center items-center";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='px-14 py-4'>
                <nav className={`${navbarBackground} lg:w-[1352] lg:h-[50px] rounded-2xl`}>
                    <div className='flex justify-between items-center h-full w-full'>
                        <div className='px-10 my-3'>  
                            <Link href={"/"}>
                                <h1 className={`${InterFont.style} font-bold text-xl sm:${centerClass}`}>Asher Reyes</h1>
                            </Link>
                        </div>
                        <div className="sm:flex">
                            <ul className='hidden sm:flex lowercase'>
                                <li className='pr-6'>
                                    <Link href={"/experience"}>
                                        <span className='hover:underline'>experiences</span>
                                    </Link>
                                </li>
                                <li className='pr-6'>
                                    <Link href={"/projects"}>
                                        <span className='hover:underline'>Projects</span>
                                    </Link>
                                </li>
                                <li className='pr-6'>
                                    <Link href={"/education"}>
                                        <span className='hover:underline'>education</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='block lg:hidden'>
                            {
                                !isOpen ? (
                                    <button 
                                    className='items-center flex justify-center pr-3'
                                    onClick={() => setIsOpen(true)}
                                    >
                                        <FiMenu className={buttonPosition} />
                                    </button>

                                ) : (
                                    <button 
                                    className='items-center flex justify-center pr-3'
                                    onClick={() => setIsOpen(false)}
                                    >
                                        <RxCross1 className={buttonPosition} />
                                    </button>
                                

                            )}
                        </div>
                    </div>
                    <div className={isOpen ? "block" : "hidden"}>
                        <div className='text-center md:lg:hidden'>
                            <Link href={"/experience"}>
                                <li className='lowercase list-none hover:underline'>expereinces</li>
                            </Link>
                            <Link href={"/projects"}>
                                <li className='lowercase list-none pt-1'>projects</li>
                            </Link>
                            <Link href={"/education"}>
                                <li className='lowercase list-none pt-1'>education</li>
                            </Link>
                        </div>
                    </div>
                </nav>
        </section>
        
    )
}

export default Navbar;