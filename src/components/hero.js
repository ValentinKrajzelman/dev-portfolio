import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import opcion1v3proyecto from "./opcion1v3proyecto.png"

const Hero = () => {

    return (

        <div className="h-full grid grid-rows-[20%_20%_60%]">
            <div className="text-2xl row-start-1 flex flex-row items-center place-content-center">VK</div>
            <div className="row-start-2 px-5">Buscas talento? Dejame mostrarte que puedo ofrecer al equipo.</div>
            <div className=" row-start-3">
                <img src={opcion1v3proyecto} />
                <button><HashLink smooth to='#projects'>Projectos</HashLink></button>
            </div>
        </div>

    );
};

export default Hero;