"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/react-pro";
import { Button } from "@nextui-org/button";

interface imageCarouselDisplayProps {
    images: string[]; // the links will be imported
}

// this function takes in a array of images and displays them in a carousel
const ImageCarouselDisplay = ({images}: imageCarouselDisplayProps) => {
    const [currentIndex, setCurrentIndex] = useState(0); // set the index to 0 to signify the beginning of the array

    // for the right arrow
    function nextImage() {
        // if current image is at the end, go beginning
        if (currentIndex == images.length - 1) {
            setCurrentIndex(0); // resets to the beginning
        } else {
          // if its not at the end, go to the next image
            setCurrentIndex(currentIndex + 1);
        }
    }

    // for the left arrow
    function previousImage() {
        // if current image is the first image, go to the last image
        if (currentIndex == 0) {
            setCurrentIndex(images.length - 1); // resets to the beginning
        } else {
          setCurrentIndex(currentIndex - 1);
        }
    }

    return (
        <section>

        </section>
    )

}

export default ImageCarouselDisplay;