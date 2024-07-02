"use client";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";

interface imageCarouselDisplayProps {
    images: string[]; // the links will be imported
}

// this function takes in a array of images and displays them in a carousel
export function imageCarouselDisplay({images}: imageCarouselDisplayProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // this function will change the current index to the next image
    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // this function will change the current index to the previous image
    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-3xl h-64">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            ))}
          </div>
          <div className="flex mt-4">
            <button
              onClick={goToPrevious}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-l hover:bg-gray-400 transition-colors duration-200"
            >
              Previous
            </button>
            <button
              onClick={goToNext}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-r hover:bg-gray-400 transition-colors duration-200"
            >
              Next
            </button>
          </div>
        </div>
      );

}