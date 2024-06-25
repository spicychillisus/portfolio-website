
interface HobbiesProps {
    name: string;
    description: string;
    link: string;
}

const HobbiesComponent = ({name, description, link}: HobbiesProps) => {
    return (
        <div>
            <h3>
                {name}
            </h3>
        </div>
    )
}

export default HobbiesComponent;