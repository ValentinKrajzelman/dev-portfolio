import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <div className="">
            <div className="">
                <div className="">Dejame mostrarte que puedo ofrecer al equipo </div>
                <div className="">aca va la imagen</div>
                <button><Link to={'/Skills'}>asdfasdf</Link></button>
            </div>
        </div>
    );
};

export default Hero;