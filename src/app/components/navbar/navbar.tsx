"use client"; // so as to tell the server that i am using useState for client side

import Link from "next/link"
import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"


const Navbar = () => {

    return (
        <nav className="w-full h-24">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                {/* logo */}
                <Link href='/'>
                    <h1 className="font-bold text-lg">Asher Reyes</h1>
                </Link>
                <div className="hidden sm:flex">
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
            </div>
        </nav>
    )
}


export default Navbar;