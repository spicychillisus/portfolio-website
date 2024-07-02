
import { imageCarouselDisplay } from "./carousel";

interface HobbiesProps {
    name: string;
    description: string;
    link: string;
    images: string[];
}

const HobbiesComponent = ({name, description, link, images}: HobbiesProps) => {
    return (
        <section className="">
            {
                imageCarouselDisplay({images})
            }
            <h3 className="text-center">
                {name}
            </h3>
            <span className="flex justify-center">
                {description}
            </span>
            <span>
                {link}
            </span>
        </section>
    )
}

export default HobbiesComponent;