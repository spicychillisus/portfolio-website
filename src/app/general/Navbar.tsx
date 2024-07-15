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
                <nav className={`${navbarBackground} lg:w-[1352] lg:h-[50px] rounded-[20px]`}>
                    <div className='flex justify-between items-center h-full w-full'>
                        <div className='px-10 my-3'>  
                            <Link href={"/"}>
                                <h1 className={`${InterFont.style} font-bold text-xl`}>Asher Reyes</h1>
                            </Link>
                        </div>
                        <div className="sm:flex">
                            <ul className='hidden sm:flex lowercase'>
                                <Link href={"/gallery"}>
                                    <li className='pr-4'>
                                        <span>Gallery</span>
                                    </li>
                                </Link>
                                <Link href={"/projects"}>
                                    <li className='pr-4'>
                                        <span>Projects</span>
                                    </li>
                                </Link>
                                <Link href={"/contact"}>
                                    <li className='pr-4'>
                                        <span>Contact Me</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
        </section>
        
    )
}

export default Navbar;