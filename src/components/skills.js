import React from "react";

const Skills = () => {

    return (
        <div className="" id="skills">
            <div className="ml-7">
                <div className="text-4xl pt-[10vh] ml-[-10px] tracking-wider">My Skills.</div>
                <div className="mt-5 ml-2 text-lg ">Frontend
                    <div className="text-sm">Besides html, css and the basics about UX and UI design. <br />
                    </div>
                    <div className=" bg-blue-600 bg-opacity-40 my-3 mr-3 py-3 px-2 rounded-lg">
                        <div className="bg-black py-1 px-8 text-white rounded-lg inline-block mr-1">React</div>
                        <div className="bg-black py-1 px-8 text-white rounded-lg inline-block">Redux</div>
                        <div className="flex mt-2">
                            <div className="bg-black py-1 px-8 text-white rounded-lg inline-block mr-1">JavaScript</div>
                            <div className="bg-black py-1 px-8 text-white rounded-lg inline-block">TailwindCSS</div>
                        </div>
                    </div>
                </div>
                <div className="ml-2 text-lg ">Backend
                    <div className="text-sm"> Mainly on premise I have a mongoDB mounted on and ubuntu raspberry pi that i use for all my current projects.
                    </div>
                    <div>
                        <div className="bg-blue-600 bg-opacity-40 my-3 mr-3 py-3 px-2 rounded-lg">
                            <div className="bg-black py-1 px-8 text-white rounded-lg inline-block mr-1">MongoDB</div>
                            <div className="bg-black py-1 px-8 text-white rounded-lg inline-block mr-1">Node.js</div>
                            <div className="flex mt-2">
                                <div className="bg-black py-1 px-8 text-white rounded-lg inline-block mr-1">Express</div>
                                <div className="bg-black py-1 px-8 text-white rounded-lg inline-block mr-1">Mongoose</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ml-2 text-lg ">Soft Skills
                    <div className=" text-sm mr-3">I like to work on teams and to be useful to other people.
                        I adapt to new enviorments easily and im a fast learner. <br />
                        Communicative. hardworking. Creative. or atleast i try :D
                    </div>
                </div>
            </div>
        </div>);
};

export default Skills;