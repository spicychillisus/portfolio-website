import React from "react";

interface ProjectProps {
    // icon: string; // will use if needed
    tittle: string;
    description: string;
}

const Project = ({tittle, description}: ProjectProps) => {
    return (
        <section>
            <div className="bg-gray-800 rounded-2xl">
                <h3 className="font-bold text-xl text-center">
                    {tittle}
                </h3>
                <p className="text-center text-base font-normal text-white">
                {description}
                </p>
            </div>
        </section>
    )
    
}

export default Project;