import React from "react";

interface PictureDisplayProps {
    picture: string;
    text: string;
    tittle: string;
    description: string;
}


export default function PictureDisplay({picture, text, tittle, description}: PictureDisplayProps) {

    return (
        <div className="">
            <img src={picture} alt={text} />
            <h3>{tittle}</h3>
            <p>{description}</p>
        </div>
        
    )

    
}

export function RandomPictureDisplay() {
    
}


