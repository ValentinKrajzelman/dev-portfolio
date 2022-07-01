import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {


    let [toggleNavbar, setToggle] = useState('translate-x-[100%]');


    return (
        <div>
            <div className={"transition ease-in-out delay-150 duration-500 fixed text-3xl font-light z-20 " + toggleNavbar} >
                <div className="w-screen h-screen grid grid-rows-1">
                    <div className="flex flex-col place-content-evenly items-center row-start-1 bg-[#0A192F]">
                        <div className="flex flex-row">
                            <HashLink className="border-2 p-2 hover:bg-[#F76E11]" smooth to='#hero' onClick={() => { setToggle('translate-x-[100%] ') }}>Inicio</HashLink>
                            <button onClick={() => { setToggle(toggleNavbar = 'translate-x-[100%]') }}><AiOutlineClose className="absolute right-10 top-5 text-3xl text-[#00C6BD]" /></button>
                        </div>
                        <HashLink className="border-2 p-2 hover:bg-[#F76E11]" smooth to='#projects' onClick={() => { setToggle('translate-x-[100%]') }}>Projects</HashLink>
                        <HashLink className="border-2 p-2 hover:bg-[#F76E11]" smooth to='#skills' onClick={() => { setToggle(toggleNavbar = 'translate-x-[100%]') }}>Skills</HashLink>
                        <HashLink className="border-2 p-2 hover:bg-[#F76E11]" smooth to='#about-me' onClick={() => { setToggle(toggleNavbar = 'translate-x-[100%]') }}>About me</HashLink>
                        <HashLink className="border-2 p-2 hover:bg-[#F76E11]" smooth to='#contact' onClick={() => { setToggle(toggleNavbar = 'translate-x-[100%]') }}>Contact</HashLink>
                    </div>
                </div>
            </div>
            <button className="fixed right-10 top-6 text-4xl z-10 text-[#00C6BD]" onClick={() => { setToggle(toggleNavbar = '') }}><GiHamburgerMenu /></button>
        </div>
    )
};

export default Navbar;
