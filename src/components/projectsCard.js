import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectsCard = () => {

    return (
        <div className="pt-16">
            <div className="flex overflow-auto mb-10 pb-10 pt-10 px-14 bg-slate-600 bg-opacity-40">
                <div className="flex flex-col place-content-between pb-3 m-10 ml-5 h-96 w-64 min-w-[16rem] bg-[#576B75] bg-opacity-90 rounded-md ">
                    <div className="my-1 mx-2 text-xl tracking-wide">01.Bugtracker</div>
                    <div className=" mx-2 rounded-md bg-black h-[30%] min-h-[30%] text-[#FFF7D6]"> Aca va la imagen</div>
                    <div className="flex ">
                        <div className="bg-[#F76E11] rounded-md ml-2 font-light text-sm my-1 px-3">Practica </div>
                        <div className="bg-[#F76E11] rounded-md ml-2 font-light text-sm my-1 px-3">Funcional</div>
                    </div>
                    <div className="mt-2 mx-2 text-xs font-mono font-light">Este es un proyecto que sirve para registrar bugs que te encuentres en proyectos para que no se te olviden.</div>
                    <div className=" flex place-content-around place-items-center text-white border-t-[1px] pt-5">
                        <div className="bg-[#0B5653] flex place-content-around place-items-center h-10 w-20 rounded-md">
                            <a className="transition ease-in-out delay-50 duration-300 bg-[#00C6BD] flex place-content-around place-items-center h-10 w-20 rounded-md border md:translate-x-[-5px] md:translate-y-[-5px] md:hover:translate-x-[0px] md:hover:translate-y-[0px]" href="">
                                <FiGithub className="mr-1" /> GitHub
                            </a>
                        </div>
                        <div className="bg-[#0B5653] flex place-content-around place-items-center h-10 w-20 rounded-md">
                            <a className="transition ease-in-out delay-150 duration-300 bg-[#00C6BD] flex place-content-around place-items-center h-10 w-20 rounded-md border md:translate-x-[-5px] md:translate-y-[-5px] md:hover:translate-x-[0px] md:hover:translate-y-[0px]" href="">
                                Go To <FiExternalLink className="ml-1" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectsCard;