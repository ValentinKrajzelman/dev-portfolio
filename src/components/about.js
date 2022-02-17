import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const About = () => {

    return (<div className="ml-7 " id='about-me'>
        <div className="text-4xl pt-[10vh] ml-[-10px] tracking-wider"> About Me.
            <div className="text-sm mt-4">
                Im a web dev from Buenos Aires, Argentina. Im currently studing cibersecurity, in the UP. <br />
                I started coding back in 2019 exploring diferents languages and technologies, from the moment i discovered Javascript i didnt look back and
                eventually decided to learn the MERN stack which is currently what i use for all my projects, im looking to expand the stack with next.js and other cool technologies!
            </div>
            <br />
            <div className="flex items-center place-content-around pr-5">
                <div className="text-sm w-[60%]"> If you want a more traditional looking cv you have it for download here: </div>
                <AiOutlineDownload />
            </div>


        </div>
    </div>);
};

export default About;