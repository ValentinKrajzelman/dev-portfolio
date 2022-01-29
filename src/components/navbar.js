import React from "react";
import { Link } from "react-router-dom";
import { GiMoon } from "react-icons/gi";


const Navbar = () => {


    return (
        <div className="col-span-6">
            <div className="flex flex-row place-content-between">

                <div className="flex flex-row items-center ml-6 ">
                    <div className="mr-6">
                        <Link to="/hero">VK </Link>
                    </div>
                    <div className="mr-6">
                        Projects
                    </div>
                    <div className="mr-6">
                        About
                    </div>
                    <div className="mr-6">
                        Skills
                    </div>

                    <div className="mr-6">
                        Contact
                    </div>
                </div>
                <div className="flex flex-row items-center ">
                    <div className="mr-6">eng/esp</div>
                    <GiMoon className="mr-6" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
