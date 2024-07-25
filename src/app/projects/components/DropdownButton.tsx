// dropdown button component
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import { DM_SansFont } from "../../general/componentFonts";
import { projectsFilter } from "../../general/algorithims/filtering";

const DropdownButton = () => {
    return (
        <div>
            <button className={`border-black rounded-3xl ${DM_SansFont.className}`}>
                Status
            </button>
        </div>
    )
}

export default DropdownButton;