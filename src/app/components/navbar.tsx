"use client"; // so as to tell the server that i am using useState for client side

import Link from "next/link"
import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"


const Navbar = () => {

    // this section here is realted to the function of the hamburger menu on mobile devices
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full h-24 shadow-xl bg-gray-800">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                {/* logo */}
                <Link href='/'>
                    <h1 className="font-bold text-lg">Asher Reyes</h1>
                </Link>
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
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
            </div>
            {/* hamburger menu */}
            <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                <AiOutlineMenu size={25} />
            </div>

        </nav>
    )
}


export default Navbar;