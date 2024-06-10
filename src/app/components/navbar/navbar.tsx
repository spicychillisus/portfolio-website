"use client"; 

// a navbar redesign from the original navbar.tsx
// this navbar will contain a new coding discipline and integrate 2 icons for the hamburger menu for smaller screens

import Link from "next/link"
import React, { useState } from "react"
import NavLink from "./navLink";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

let links = [
    {name: 'Resume', href: '/resume'},
    {name: 'Projects', href: '/projects'},
    {name: 'Photography Works', href: '/photos'},
    {name: 'Contact', href: '/contact'}
]

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full h-24">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href={'/'}>
                    <h1 className="font-bold text-white lg:text-2xl md:text-2xl sm:text-xl">
                        Asher Reyes
                    </h1>
                </Link>
                <div className="block md:hidden lg:hidden">
                {
                // PLEASE DO NOT TOUCH THIS I'M BEGGING I JUST GOT THIS TO WORK
                !navbar ? (
                    // if navbar not open, show FiMenu icon and not display the menu options
                    // if clicked, setNavbar to true and show the RxCross1 icon and the menu options
                    // this part will only function on small screens
                    <button
                        className="items-center flex"
                        onClick={() => setNavbar(true)}
                    >
                        <FiMenu className="h-5 w-5" />
                    </button>
                ) : (
                    // if navbar is open, show RxCross1 icon and display the menu options
                    <button
                        className="items-center flex"
                        onClick={() => setNavbar(false)}
                    >
                        <RxCross1 className="h-5 w-5" />
                    </button>
                )}
                <div className="content-end">
                    <ul className="list-none m-0 p-0">
                        {links.map((link) => (
                            <NavLink href={link.href} name={link.name} />
                        ))}
                    </ul>
                </div>
            </div>
            </div>
            
            
            
        </nav>
    )
}

export default Navbar;