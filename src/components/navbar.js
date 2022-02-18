import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { GiMoon, GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";


const Navbar = () => {


    let [toggleNavbar, setToggle] = useState('translate-x-[100%]');


    return (
        <div>
            <div className={"fixed text-3xl font-light z-20 " + toggleNavbar} >
                <div className="w-screen h-screen grid grid-rows-[90%_10%]">
                    <div className="flex flex-col place-content-evenly items-center row-start-1 bg-[#B6DEEA]">
                        <div className="flex flex-row">
                            <HashLink className="text-[#0075FF] " smooth to='#hero' onClick={() => { setToggle('translate-x-[100%]') }}>Inicio</HashLink>
                            <button onClick={() => { setToggle(toggleNavbar = 'translate-x-[100%]') }}><GrClose className="absolute right-10 top-5" /></button>
                        </div>
                        <HashLink className="text-[#0075FF]" smooth to='#projects' onClick={() => { setToggle('translate-x-[100%]') }}>Projects</HashLink>
                        <HashLink className="text-[#0075FF]" smooth to='#skills' onClick={() => { setToggle(toggleNavbar = 'translate-x-[100%]') }}>Skills</HashLink>
                        <HashLink className="text-[#0075FF]" smooth to='#about-me' onClick={() => { setToggle(toggleNavbar = 'translate-x-[100%]') }}>About me</HashLink>
                        <HashLink className="text-[#0075FF]" smooth to='#contact' onClick={() => { setToggle(toggleNavbar = 'translate-x-[100%]') }}>Contact</HashLink>
                    </div>
                    <div className="flex flex-row place-content-around items-center row-start-2 bg-[#0075FF] ">
                        <div className="">eng/esp</div>
                        <GiMoon className="" />
                    </div>
                </div>
            </div>
            <button className="fixed right-10 top-6 text-4xl z-10" onClick={() => { setToggle(toggleNavbar = '') }}><GiHamburgerMenu /></button>
        </div>
    )
};

export default Navbar;
