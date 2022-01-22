import React from "react";
import {Link} from "react-router-dom";
import {GoPrimitiveDot} from "react-icons/go";

const Navbar = () => {


    return (
    <div className="bg-blue-200 h-screen col-span-1">
        <div className="flex flex-col items-center h-full place-content-evenly pb-8">
            <div className="text-6xl">
            <Link to="/pija">VK</Link>
            </div>
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
