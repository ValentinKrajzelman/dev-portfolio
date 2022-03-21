import React from "react";
import { HashLink } from 'react-router-hash-link';


const PcNavbar = () => {
    return (
        <div className="flex pt-10 ml-40 ">
            <HashLink className="border-2 p-2 hover:bg-[#F76E11] ml-3" smooth to='#projects' >Projects</HashLink>
            <HashLink className="border-2 p-2 hover:bg-[#F76E11] ml-3" smooth to='#skills' >Skills</HashLink>
            <HashLink className="border-2 p-2 hover:bg-[#F76E11] ml-3" smooth to='#about-me' >About me</HashLink>
            <HashLink className="border-2 p-2 hover:bg-[#F76E11] ml-3" smooth to='#contact' >Contact</HashLink>
        </div>
    )
}

export default PcNavbar;