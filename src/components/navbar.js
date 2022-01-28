import React from "react";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";

import Squares from "./squares"

const Navbar = () => {


    return (
        <div className="bg-[#5F9DBF] col-span-6">
            <div className="flex flex-row items-center w-full place-content-evenly  ">
                <div className="text-6xl">
                    <Link to="/hero">VK </Link>
                </div>
                <Squares />
                <div className="text-3xl">
                    Home
                </div>
                <div className="text-3xl">
                    About
                </div>
                <div className="text-3xl">
                    Skills
                </div>
                <div className="text-3xl">
                    Projects
                </div>
                <div className="text-3xl">
                    Contact
                </div>
            </div>
        </div>);
};

export default Navbar;
