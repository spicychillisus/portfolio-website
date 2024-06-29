
//import hobbies from "./hobbiesArray";

interface HobbiesProps {
    name: string;
    description: string;
    link: string;
}

const HobbiesComponent = ({name, description, link}: HobbiesProps) => {
    return (
        <div>
            <h3 className="text-center">
                {name}
            </h3>
            <span>
                {description}
            </span>
            <span>
                {link}
            </span>
        </div>
    )
}

export default HobbiesComponent;