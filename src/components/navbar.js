import React from "react";
import { Link } from "react-router-dom";
import { GiMoon, GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";


const Navbar = () => {


    const [a, b] = [1, 2];

    function hamburger() {
        return (
            <div className="text-3xl font-thin fixed z-10">
                <div className="w-screen h-screen grid grid-rows-[90%_10%]">
                    <div className="flex flex-col place-content-evenly items-center row-start-1 bg-orange-200">
                        <div className="flex flex-row">
                            <div className="text-5xl">
                                <Link to="/hero">VK </Link>
                            </div>
                            <GrClose className="absolute right-10 top-10" />
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
        );
    }

    return (<div><button onClick={hamburger()}><GiHamburgerMenu /></button></div>)
};

export default Navbar;
