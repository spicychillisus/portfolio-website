"use client"; 

import Link from "next/link"
import React, { useState } from "react"
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {

const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full h-24">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16" onClick={()=> setNavbar(false)}>
                {/* logo */}
                <Link href='/'>
                    <h1 className="font-bold text-lg">Asher Reyes</h1>
                </Link>
                <div className="sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href="/resume">
                            <li className="ml-10 lowercase hover:border-b text-base">Resume</li>
                        </Link>
                        <Link href="/projects">
                            <li className="ml-10 lowercase hover:border-b text-base">Projects</li>
                        </Link>
                        <Link href="/photos">
                            <li className="ml-10 lowercase hover:border-b text-base">Photography Works</li>
                        </Link>
                        <Link href="/contact">
                            <li className="ml-10 lowercase hover:border-b text-base">Contact</li>
                        </Link>
                    </ul>
                </div>
                {/* hamburger */}
                <div className="md:hidden lg:hidden">
                    {!navbar ? (
                        
                        <button
                        className=""
                        onClick={() => setNavbar(true)}
                        >
                        <FiMenu className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                        className=""
                        onClick={() => setNavbar(false)}
                        >
                        <RxCross1 className="h-5 w-5" />
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}


export default Navbar;