
/**
 * @description main component to be exported to the main page
 * @author spicychillisus
 */

// imports
import hobbies from "./hobbiesArray";
import HobbiesComponent from "./hobbiesComponent";
import React from 'react';

export default function Hobbies() {
    return (
        <section className="py-8 my-8 border-white border-2 rounded-2xl">
            <h1 className="text-center font-bold text-5xl">
                Hobbies
            </h1>
            <div>
                {
                    hobbies.map((h) => (
                        <HobbiesComponent 
                        name={h.name}
                        description={h.description}
                        link={h.link}
                        images={h.image}
                        />
                    ))
                }
            </div>
            
        </section>
    )
}




