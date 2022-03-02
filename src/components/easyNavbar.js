import React from "react";
import { HashLink } from 'react-router-hash-link';

const EasyNavbar = () => {
    return (
        <div className="fixed bottom-0  flex flex-row place-content-evenly items-center bg-[#0075FF] font-sans text-xl underline underline-offset-4 w-screen h-[8vh] ">
            <HashLink smooth to='#skills'>Skills</HashLink>
            <HashLink smooth to='#about-me'>about me</HashLink>
            <HashLink smooth to='#contact'>contact</HashLink>
        </div>
    )
}

export default EasyNavbar;