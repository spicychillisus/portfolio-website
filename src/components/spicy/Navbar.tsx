"use client";
import { useState } from "react"
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Projects",
        href: "/projects"
    },
    {
        name: "Experience",
        href: "/experiences"
    },
    {
        name: "Contact",
        href: "/contact"
    }
]

export default function Navbar() {
    return (
        <motion.div
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1
        }}
        transition={{
            duration: 1.9
        }}
        >
            <div className="mx-20 my-3">
                <nav className="h-full w-full bg-white/40 rounded-xl">
                    <div className="grid grid-cols-4 gap-4 p-4">
                        {links.map((link, index) => (
                            <div className="pl-2">
                                <Link 
                                key={index} 
                                href={link.href}
                                className="select-none cursor-pointer text-weird-brown font-semibold text-lg hover:underline hover:text-weird-brown/80"
                                >
                                    <span>
                                        {link.name}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
        </motion.div>
    )
}