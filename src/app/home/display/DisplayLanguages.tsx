import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaReact, FaNodeJs, FaJava} from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import * as fonts from "../../general/componentFonts";

interface LanguageProps {
    name: string;
    icon: JSX.Element;
    percentage: number;
}


const iconSize = 60;

function barColor(percentage: number) {
    if (percentage >= 80) {
        return "bg-lime-500";
    } else {
        return "bg-blue-600"
    }
}

const LanguageProgress = ({ name, icon, percentage }: LanguageProps) => {
    
    return (
        <div className="grid grid-cols-1 place-items-center">
            <div className="bg-slate-500 rounded-xl place-content-center px-20 py-8 w-full ml-3 hover:translate-y-[-4px] transition-transform duration-300">
                <div className="grid grid-cols-1 place-items-center">
                    {icon}
                    <span className="flex justify-center text-white mb-2 pt-1">{name}</span>
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                        <div className={`${barColor(percentage)} h-4 rounded-full`} style={{ width: `${percentage}%` }}></div>
                    </div>
                    <span className="text-white">{percentage}%</span>
                </div>
            </div>
        </div>
        
    );
};

const DisplayLanguages = () => {

    const languages = [
        { 
            name: "Java", 
            icon: <FaJava size={iconSize} color="#fbbf24" />, 
            percentage: 50 
        },
        { 
            name: "JavaScript", 
            icon: <IoLogoJavascript size={iconSize} color="#fbbf24" />, 
            percentage: 90 
        },
        { 
            name: "HTML", 
            icon: <IoLogoHtml5 size={iconSize} color="#9a3412" />, 
            percentage: 87 
        },
        { 
            name: "CSS", 
            icon: <FaCss3Alt size={iconSize} color="#1e3a8a" />, 
            percentage: 70 
        },
        { 
            name: "Python", 
            icon: <FaPython size={iconSize} color="#172554" />, 
            percentage: 35 
        },
        { 
            name: "TypeScript", 
            icon: <SiTypescript size={iconSize} color="#1e40af" />, 
            percentage: 50 
        },
    ];

    return (
        <div>
            <h2 className={`${fonts.MontserratFont.className} text-weird-brown text-center text-3xl font-bold`}>
                Programming Languages
            </h2>
            <p className="md:lg:px-60 text-black text-center">
                Over my course of study, I&apos;ve learned a few programming softwares to further enhance my ability to create and deploy technological solutions and develop advanced software applications. Here are a few of the programming languages I&apos;ve learned and used.
            </p>
            <div className="flex justify-center pt-4">
                <div className="grid grid-cols-3 gap-4 place-items-center">
                        {languages.map((language, index) => (
                            <LanguageProgress
                                key={index}
                                name={language.name}
                                icon={language.icon}
                                percentage={language.percentage}
                            />
                        ))}
                    
                </div>
            </div>
        </div>
    )
}

export default DisplayLanguages;