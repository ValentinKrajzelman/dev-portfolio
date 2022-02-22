import React from "react";
import { HashLink } from 'react-router-hash-link';
import fotoHero from "./fotoHero.png"

const Hero = () => {

    return (

        <div className="h-full grid grid-rows-[15%_20%_65%] mb-9">
            {/* <div className="text-5xl row-start-1 flex flex-row pt-5 pl-8 items-start place-content-start text-[#0075FF] font-light"></div> */}
            <div className="row-start-2 px-10">
                <div className=" text-md">Hola! Soy Valentin Krajzelman,</div>
                <div className="text-3xl inline-block">Desarrollador Full-Stack.</div>
                <div className="mt-5 text-sm font-light">Buscas talento? Dejame mostrarte que puedo ofrecer al equipo.</div>
            </div>
            <div className="gradiente relative w-screen overflow-hidden row-start-3 ">
                <div className="relative top-40 left-10 bg-[#0B5653] h-10 w-24 rounded-md">
                    <HashLink smooth to='#projects'>
                        <button className="transition ease-in-out delay-150 duration-300 font-light bg-[#00C6BD] border h-10 w-24 rounded-md translate-x-[-5px] translate-y-[-5px] hover:translate-x-[0px] hover:translate-y-[0px]">
                            Projectos
                        </button>
                    </HashLink>
                </div>
                <img className="absolute bottom-0 left-[40%]" src={fotoHero} />
            </div>
        </div>

    );
};

export default Hero;