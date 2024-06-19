import React from "react";

interface PictureDisplayProps {
    picture: string;
    text: string;
    tittle: string;
    description: string;
}


export function PictureDisplay({picture, text, tittle, description}: PictureDisplayProps) {
/**
 * this is the picture modal that will be displayed when the user clicks
 * on the picture in the gallery
 */
    return (
        <div className="rounded-xl">
            <img src={picture} alt={text} />
            <h3>{tittle}</h3>
            <p>{description}</p>
        </div>
        
    )

    
}

/**
 * not sure what this is for but it was intended for the home page but now it's gna go to the top of the photography
 * works page
 * this uses the pictures from the gallery
 */
export function RandomPictureDisplay() {
    
}

/**
 * photos for the random picture display will be taken from here
 */
export function photoGallery() {
    return (
        <div>

        </div>
    )
}


