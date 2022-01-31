import React from "react";
import { Link } from "react-router-dom";
import { GiMoon } from "react-icons/gi";


const Navbar = () => {


    return (
        <div className="text-3xl font-thin">
            <div className="w-screen h-screen grid grid-rows-mobNavbar">
                <div className="flex flex-col place-items-center place-content-evenly row-start-1">
                    <div className="text-5xl">
                        <Link to="/hero">VK </Link>
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
                <div className="flex flex-row place-content-around items-end pb-5 content-center row-start-2 auto-rows-min bg-blue-600 ">
                    <div className="">eng/esp</div>
                    <GiMoon className="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
