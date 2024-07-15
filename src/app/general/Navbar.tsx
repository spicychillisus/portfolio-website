"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";


const InterFont = Inter({ weight: '500', subsets: ["latin"] });
const navbarBackground = "h-full w-full bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className='px-14 py-4'>
                <nav className={`${navbarBackground} lg:w-[1352] lg:h-[50px] rounded-3xl`}>
                    <div className='flex justify-between items-center h-full w-full'>
                        <div className='px-10 my-3'>  
                            <Link href={"/"}>
                                <h1 className={`${InterFont.style} font-bold text-xl`}>Asher Reyes</h1>
                            </Link>
                        </div>
                        <div className="sm:flex">
                            <ul className='hidden sm:flex lowercase'>
                                <li className='pr-6'>
                                    <Link href={"/gallery"}>
                                        <span>Gallery</span>
                                    </Link>
                                </li>
                                <li className='pr-6'>
                                    <Link href={"/projects"}>
                                        <span>Projects</span>
                                    </Link>
                                </li>
                                <li className='pr-6'>
                                    <Link href={"/contact"}>
                                        <span>Contact Me</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </section>
        
    )
}

export default Navbar;