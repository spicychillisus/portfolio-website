import React from "react";
import {Button, ButtonGroup} from "@nextui-org/button";


interface ProjectProps {
    // icon: string; // will use if needed
    image: string;
    tittle: string;
    description: string;
    link: string;
    status: string;
}

const Project = ({image, tittle, description, link, status}: ProjectProps) => {
    return (
        <section className="">
            
            <div className="bg-gray-800 rounded-2xl pl-2 pr-2">
                <img 
                src={image} 
                alt="could not load image."
                className="rounded-2xl w-full h-40 object-cover flex justify-center items-center"
                />
                <h3 className="font-bold text-xl text-center">
                    {tittle}
                </h3>
                <p className="text-center text-white font-normal text-sm">
                {description}
                </p>
                <p className="text-center text-base font-normal">
                    <a href={link}>
                        <ButtonGroup className="mt-2">
                            <Button>View</Button>
                        </ButtonGroup>
                    </a>
                </p>
                <span className="text-white flex justify-center font-normal text-base pt-2 pb-2">
                    Status: {status}
                </span>
            </div>
        </section>
    )
    
}

export default Project;