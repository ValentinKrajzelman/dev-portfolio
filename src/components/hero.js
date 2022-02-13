import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import fotoHero from "./fotoHero.png"

const Hero = () => {

    return (

        <div className="h-full grid grid-rows-[20%_20%_60%]">
            <div className="text-5xl row-start-1 flex flex-row items-center place-content-center">VK</div>
            <div className="row-start-2 px-5">Buscas talento? Dejame mostrarte que puedo ofrecer al equipo.</div>
            <div className="relative w-screen overflow-hidden row-start-3 bg-[#3B9CB9]">
                <button><HashLink smooth to='#projects' className="ml-10 m-48">Projectos</HashLink></button>
                <img className="absolute bottom-0 left-[40%]" src={fotoHero} />
            </div>
        </div>

    );
};

export default Hero;