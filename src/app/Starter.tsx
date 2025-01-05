"use client";
import { useState } from "react";
import { 
    montserrat, montserrat500, montserrat600, montserrat700 
} from "@/fonts";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MainPage from "./Home";

export default function Start() {

    const [showMainPage, setShowMainPage] = useState(false);
    const [username, setUsername] = useState("");

    if (showMainPage) {
        return (
            <MainPage />
        )
    } else {
        return (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                    <motion.div
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.82 }}
                    >
                        <h1 className={`text-4xl ${montserrat600.className} select-none sm:text-center`}>
                            Welcome to my portfolio page!
                        </h1>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    >
                        <p className={`text-black select-none ${montserrat600.className} text-2xl`}>
                            Ready to know more about me?
                        </p>
                    </motion.div>
                    <Button 
                        onClick={() => {
                            setTimeout(() => {
                                setShowMainPage(true), 4
                            })
                        }} 
                        className="mt-5 bg-weird-brown hover:bg-weird-brown/80 select-none cursor-pointer"
                        >
                            Click here
                    </Button>  
                </div>
                        
            </div>
        )
    }
}
