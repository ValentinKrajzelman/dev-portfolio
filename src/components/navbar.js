import React from "react";
import {GoPrimitiveDot} from "react-icons/go";

const Navbar = () => {


    return (
    <div className="bg-blue-200 h-screen col-span-1">
        <div className="flex flex-col items-center h-full place-content-evenly pb-8">
            <div className="text-6xl">VK</div>
            <GoPrimitiveDot className="text-2xl"/>
            <div className="text-3xl">Home</div>
            <GoPrimitiveDot className="text-2xl"/>
            <div className="text-3xl">About</div>
            <GoPrimitiveDot className="text-2xl"/>
            <div className="text-3xl">Skills</div>
            <GoPrimitiveDot className="text-2xl"/>
            <div className="text-3xl">Projects</div>
            <GoPrimitiveDot className="text-2xl"/>
            <div className="text-3xl">Contact</div>
        </div>
    </div>);
};

export default Navbar;
