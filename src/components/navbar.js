import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiMoon, GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";


const Navbar = () => {


    let [toggleNavbar, setToggle] = useState('translate-x-[100%]');

    function hamburger() {
        return (
            <div></div>);
    }

    return (
        <div>
            <div className={"fixed text-3xl font-thin z-10 " + toggleNavbar} >
                <div className="w-screen h-screen grid grid-rows-[90%_10%]">
                    <div className="flex flex-col place-content-evenly items-center row-start-1 bg-orange-200">
                        <div className="flex flex-row">
                            <div className="text-5xl">
                                <Link to="/hero">VK </Link>
                            </div>
                            <button onClick={() => { setToggle(toggleNavbar = 'translate-x-[100%]') }}><GrClose className="absolute right-10 top-5" /></button>
                        </div>
                        <div className="">
                            Projects
                        </div>
                        <div className="">
                            About
                        </div>
                        <div className="">
                            Skills
                        </div>

                        <div className="">
                            Contact
                        </div>
                    </div>
                    <div className="flex flex-row place-content-around items-center row-start-2 bg-blue-600 ">
                        <div className="">eng/esp</div>
                        <GiMoon className="" />
                    </div>
                </div>
            </div>
            <button className="absolute right-10 top-5 text-2xl" onClick={() => { setToggle(toggleNavbar = '') }}><GiHamburgerMenu /></button>
        </div>
    )
};

export default Navbar;
