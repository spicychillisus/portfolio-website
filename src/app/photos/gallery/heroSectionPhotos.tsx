//import { useEffect, useState } from "react";
import { Istok_Web } from "next/font/google";

const IstokWeb = Istok_Web({ weight: '400', subsets: ['latin'], style: 'normal'})

const HeroPhotos = () => {
    return (
        <section className="py-6 my-8">
            <div className="text-center text-white">
                <h1 className="text-4xl font-bold">
                    Photography Gallery
                </h1>   
                <p className={`${IstokWeb.className} font-normal`}>
                    Here are some of the photos that I have taken over the years
                </p>
            </div>

        </section>
    )
}

export default HeroPhotos;