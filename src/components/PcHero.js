import React from "react";
import { HashLink } from 'react-router-hash-link';

import fotoHero from "./fotoHero.png"
import PcNavbar from "./PcNavbar";

const PcHero = () => {

    return (

        <div className="h-full grid grid-cols-[60%_40%] gradiente2">
            <div className="col-start-1">
                <div className="flex pt-10 ml-28 ">
                    <HashLink className="border-2 p-2 hover:bg-[#F76E11] ml-3" smooth to='#projects' >Projects</HashLink>
                    <HashLink className="border-2 p-2 hover:bg-[#F76E11] ml-3" smooth to='#skills' >Skills</HashLink>
                    <HashLink className="border-2 p-2 hover:bg-[#F76E11] ml-3" smooth to='#about-me' >About me</HashLink>
                    <HashLink className="border-2 p-2 hover:bg-[#F76E11] ml-3" smooth to='#contact' >Contact</HashLink>
                </div>
                <div className="mt-40 ml-32">
                    <div className=" text-2xl">Hi! Im Valentin Krajzelman,</div>
                    <div className="text-8xl inline-block">Full-Stack developer.</div>
                    <div className="mt-5 text-xl font-light">Let me show you what can i offer to the team.</div>
                </div>
                <div className="ml-40 mt-20 bg-[#0B5653] h-10 w-24 rounded-md">
                    <HashLink smooth to='#projects'>
                        <button className="transition ease-in-out delay-50 duration-300 font-light bg-[#00C6BD] border h-10 w-24 rounded-md translate-x-[-5px] translate-y-[-5px] hover:translate-x-[0px] hover:translate-y-[0px]">
                            Proyects
                        </button>
                    </HashLink>
                </div>
            </div>
            <div className="relative overflow-hidden col-start-2 ">
                <img className="absolute bottom-0 w-[90%] h-[90%]" src={fotoHero} />
            </div>
        </div>)
};

export default PcHero;