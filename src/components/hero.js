import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import fotoHero from "./fotoHero.png"

const Hero = () => {

    return (

        <div className="h-full grid grid-rows-[15%_25%_60%]">
            <div className="text-5xl row-start-1 flex flex-row pt-5 pl-8 items-start place-content-start text-[#0075FF] font-light"></div>
            <div className="row-start-2 px-10">
                <div className="mb-5 text-xl">Hola! Soy Valentin Krajzelman, <div className="bg-[#845EC2] p-1 inline-block text-white">Programador Full-Stack.</div></div>
                <div className="text-sm">Buscas talento? Dejame mostrarte que puedo ofrecer al equipo.</div>
            </div>
            <div className="relative w-screen overflow-hidden row-start-3 bg-[#3B9CB9] ">
                <HashLink className="relative top-[7.5rem] left-10 bg-[#0075FF] text-white text py-2 px-6" smooth to='#projects'>Projectos</HashLink>
                <img className="absolute bottom-0 left-[40%]" src={fotoHero} />
            </div>
        </div>

    );
};

export default Hero;