import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaReact, FaNodeJs, FaJava} from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import * as fonts from "@/app/general/componentFonts";
import { Theme } from "@radix-ui/themes";

interface props {
    name: string;
    profeciency: number;
    logo?: string; // icon of the language
}

export default function ProgrammingLanguage({name, profeciency}: props) {
    return (
        <div className="bg-slate-500 rounded-xl hover:translate-y-[-4px] transition-transform duration-300 flex">
            <span>{name}</span>
        </div>
    )
}