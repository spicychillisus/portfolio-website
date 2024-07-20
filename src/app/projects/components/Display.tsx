import { SiTypescript, SiVisualstudiocode } from "react-icons/si";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import Link from "next/link";


type ProjectDisplayProps = {
    className?: string;
};

const date = new Date();
const dateFormat = new Intl.DateTimeFormat(
    'en',
    {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
);
const formattedDate = dateFormat.format(date);
console.log(formattedDate)

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ className }) => {
    return (
        <div className={className}>
            <div>

            </div>
        </div>
    );
};

export default ProjectDisplay;