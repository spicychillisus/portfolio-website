// component
import {Button, ButtonGroup} from "@nextui-org/button";
import * as fonts from "../general/componentFonts";

interface ProjectProps {
    // icon: string; // will use if needed
    tittle: string;
    description: string;
    link: string;
    status: string;
    languages?: string[];
}


const Project = ({
    tittle, description, link, status, languages
}: ProjectProps) => {
    return (
        <section>
            
            <div className="bg-gray-800 rounded-2xl pl-2 pr-2">
                <h3 className="font-bold text-xl text-center pt-2">
                    {tittle}
                </h3>
                <p className="text-center font-normal text-sm">
                {description}
                </p>
                <p className="text-center text-base font-normal">
                    <a href={link}>
                        <div className="flex justify-center">
                            <ButtonGroup className="mt-2">
                                <Button>View</Button>
                            </ButtonGroup>
                        </div>
                        
                    </a>
                </p>
                
                <p className="text-center text-base font-normal pt-2 pl-2">
                    Status: {
                        status === "Completed" ? (
                            <span className="text-green-500 font-bold">
                                {status}
                            </span>
                        ) : (
                            <span className="text-red-400 font-semibold">
                                {status}
                            </span>
                        )
                        
                    }
                </p>
                
                <p>
                    {
                        languages?.map((language) => (
                            <span className="text-center text-base font-normal pl-2">
                                {language}
                            </span>
                        ))
                    }
                </p>
            </div>
        </section>
    )
    
}

export default Project;