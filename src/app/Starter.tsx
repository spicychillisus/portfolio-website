"use client"
import { useState, useEffect } from "react";
import { montserrat600 } from "@/fonts";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Start() {

    const [mainPage, showMainPage] = useState(false);

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
                <h1 className={`text-black select-none ${montserrat600.className} text-4xl`}>
                    Ready to know more about me?
                </h1>
            </div> 
        </div>
    )
}