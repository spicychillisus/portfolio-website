"use client"; 

// MAIN FILE

import Link from "next/link"
import React, { useState } from "react"
//import NavLink from "./navLink";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import MobileLink from "./mobileLink";

// using the data from the MobileLink component, we can create a list of links to be displayed in the navbar
// the links will be displayed in the MobileLink component
// the MobileLink component will be displayed in the component 
let links = [
    // name: the name of the link that will be displayed
    // route: the route that the link will redirect to
    {
        name: "Resume",
        route: "/resume"
    },
    {
        name: "Photography Works",
        route: "/photos"
    },
    {
        name: "Contact",
        route: "/contact"
    }
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
                // shows the menu options if the navbar is open
                // stays hidden if the navbar is closed
                    navbar ? 
                    "flex justify-center text-center bg-black" 
                    : 
                    "hidden"
            }>
                <ul className="text-center">
                    {
                        links.map((link, index) => {
                            return (
                                <MobileLink key={index} name={link.name} route={link.route} />
                            )
                        })
                    }
                </ul>
                
            </div>
            
            
        </nav>
    )
}

export default Navbar;