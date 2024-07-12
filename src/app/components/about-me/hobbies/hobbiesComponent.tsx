
import { Button, ButtonGroup } from "@nextui-org/button";
import ImageCarouselDisplay from "./carousel";
import { readdirSync } from "fs";

interface HobbiesProps {
    name: string;
    description: string;
    link: string;
    images: string[];
}

// randomly display an image from this array
let images = [
    <img src="" alt="" />,
    "",

]


const HobbiesComponent = ({name, description, link, images}: HobbiesProps) => {
    return (
        <section className="">
            {/* <ImageCarouselDisplay images={images} /> */}
            <h3 className="text-center">
                {name}
            </h3>
            <span className="flex justify-center">
                {description}
            </span>
            {/* create a random image display */}
            <span>
                <a href={link}>
                    <ButtonGroup className="flex justify-center pt-4">
                        {/* this links to the photography page where it shows the gallery */}
                        <Button>
                            Click here for my other photography works
                        </Button>
                    </ButtonGroup>
                </a>
            </span>
        </section>
    )
}

export default HobbiesComponent;