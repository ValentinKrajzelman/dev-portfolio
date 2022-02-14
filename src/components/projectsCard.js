import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectsCard = () => {

    return (<div>
        <div className="flex overflow-auto mb-10">
            <div className="flex flex-col place-content-around mt-10 ml-5 px-2 h-[40vh] min-w-[27vh] max-w-[27vh] bg-[#7EB5CC] rounded-md ">
                <div className="m-2 rounded-md bg-black h-[30%] text-white"> Aca va la imagen</div>
                <div className="text-xl tracking-wide">Bugtracker.</div>
                <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime esse laboriosam necessitatibus </div>
                <div className="flex flex-row place-content-around place-items-center text-white border-t-[1px] p-2">
                    <button className="bg-gray-800 flex place-content-around place-items-center py-1 px-2 rounded-md"><FiGithub className="mr-1" /> GitHub </button>
                    <button className="bg-gray-800 flex place-content-around place-items-center py-1 px-2 rounded-md">Go To <FiExternalLink className="ml-1" /></button>
                </div>
            </div>
            <div className="flex flex-col place-content-around mt-10 ml-5 px-2 h-[40vh] min-w-[27vh] max-w-[27vh] bg-[#7EB5CC] rounded-md ">
                <div className="m-2 rounded-md bg-black h-[30%] text-white"> Aca va la </div>
                <div className="text-xl tracking-wide">Bugtracker.</div>
                <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime esse laboriosam necessitatibus </div>
                <div className="flex flex-row place-content-around place-items-center text-white border-t-[1px] p-2">
                    <button className="bg-gray-800 flex place-content-around place-items-center py-1 px-2 rounded-md"><FiGithub className="mr-1" /> GitHub </button>
                    <button className="bg-gray-800 flex place-content-around place-items-center py-1 px-2 rounded-md">Go To <FiExternalLink className="ml-1" /></button>
                </div>
            </div>
            <div className="flex flex-col place-content-around mt-10 ml-5 px-2 h-[40vh] min-w-[27vh] max-w-[27vh] bg-[#7EB5CC] rounded-md ">
                <div className="m-2 rounded-md bg-black h-[30%] text-white"> Aca va la </div>
                <div className="text-xl tracking-wide">Bugtracker.</div>
                <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime esse laboriosam necessitatibus </div>
                <div className="flex flex-row place-content-around place-items-center text-white border-t-[1px] p-2">
                    <button className="bg-gray-800 flex place-content-around place-items-center py-1 px-2 rounded-md"><FiGithub className="mr-1" /> GitHub </button>
                    <button className="bg-gray-800 flex place-content-around place-items-center py-1 px-2 rounded-md">Go To <FiExternalLink className="ml-1" /></button>
                </div>
            </div>
            <div className="flex flex-col place-content-around mt-10 ml-5 px-2 h-[40vh] min-w-[27vh] max-w-[27vh] bg-[#7EB5CC] rounded-md ">
                <div className="m-2 rounded-md bg-black h-[30%] text-white"> Aca va la </div>
                <div className="text-xl tracking-wide">Bugtracker.</div>
                <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime esse laboriosam necessitatibus </div>
                <div className="flex flex-row place-content-around place-items-center text-white border-t-[1px] p-2">
                    <button className="bg-gray-800 flex place-content-around place-items-center py-1 px-2 rounded-md"><FiGithub className="mr-1" /> GitHub </button>
                    <button className="bg-gray-800 flex place-content-around place-items-center py-1 px-2 rounded-md">Go To <FiExternalLink className="ml-1" /></button>
                </div>
            </div>
            <div className="flex flex-col place-content-around mt-10 ml-5 px-2 h-[40vh] min-w-[27vh] max-w-[27vh] bg-[#7EB5CC] rounded-md ">
                <div className="m-2 rounded-md bg-black h-[30%] text-white"> Aca va la </div>
                <div className="text-xl tracking-wide">Bugtracker.</div>
                <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime esse laboriosam necessitatibus </div>
                <div className="flex flex-row place-content-around place-items-center text-white border-t-[1px] p-2">
                    <button className="bg-gray-800 flex place-content-around place-items-center py-1 px-2 rounded-md"><FiGithub className="mr-1" /> GitHub </button>
                    <button className="bg-gray-800 flex place-content-around place-items-center py-1 px-2 rounded-md">Go To <FiExternalLink className="ml-1" /></button>
                </div>
            </div>
        </div>
    </div>);
};

export default ProjectsCard;