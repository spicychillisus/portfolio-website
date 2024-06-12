"use client"; 

// MAIN FILE

import Link from "next/link"
import React, { useState } from "react"
//import NavLink from "./navLink";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import MobileLink from "./mobileLink";

// only appears on mobile
function displayMobileMenu() {
    return (
        <h1>hi</h1>
    )
}

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
                <div className="sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href="/resume">
                            <li className="ml-10 lowercase hover:border-b text-base">Resume</li>
                        </Link>
                        <Link href="/photos">
                            <li className="ml-10 lowercase hover:border-b text-base">Photography Works</li>
                        </Link>
                        <Link href="/contact">
                            <li className="ml-10 lowercase hover:border-b text-base">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className="block lg:hidden">
                {
                // PLEASE DO NOT TOUCH THIS I'M BEGGING I JUST GOT THIS TO WORK
                !navbar ? (
                    // if navbar not open, show FiMenu icon and not display the menu options
                    // if clicked, setNavbar to true and show the RxCross1 icon and the menu options
                    // this part will only function on small screens
                    // don't add a div below this please it will make the icons go weird
                    <button
                        className="items-center flex"
                        onClick={() => setNavbar(true)}
                    >
                        <FiMenu className="h-5 w-5" />
                    </button>
                ) : (
                    // if navbar is open, show RxCross1 icon
                    <button
                        className="items-center flex"
                        onClick={() => setNavbar(false)}
                    >
                        <RxCross1 className="h-5 w-5" />
                        
                    </button>
                    
                )} 
                </div>
                {
                    /*
                    do not put any codes here it will break the navbar and i'll be sad
                    */
                }
            </div>
            <div className={
                    navbar ? 
                    "flex justify-center text-center bg-slate-200" 
                    : 
                    "hidden"
            }>
                <span>test</span>
                
            </div>
            
            
        </nav>
    )
}

export default Navbar;