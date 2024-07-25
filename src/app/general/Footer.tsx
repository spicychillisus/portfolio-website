
import React from "react";
import * as fonts from "../general/componentFonts";

const Footer = () => {
    return (
        <footer className="flex justify-center pt-12">
            <span className={`${fonts.DM_SansFont.className} font-light`}>
                Developed and Designed by Asher Reyes © 2024
            </span>
        </footer>
    )
}

export default Footer;