import React from "react";

const Skills = () => {

    return (
        <div className="md:ml-28 md:mr-16" id="skills">
            <div className="ml-5">
                <div className="text-4xl md:text-5xl pt-[10vh]  tracking-wider">My Skills.</div>
                <div className="flex flex-col md:flex-row md:align-middle">
                    <div className="mt-5 md:mt-0 md:w-96 text-lg md:text-2xl md:pt-8">Frontend
                        <div className="text-sm font-light md:h-10 md:pt-3">Besides html, css and the basics about UX and UI design. <br />
                        </div>
                        <div className=" bg-blue-600 bg-opacity-40 my-3 mr-3 py-3 px-2 rounded-lg md:mt-3">
                            <div className="bg-[#00C6BD] border py-1 px-8 rounded-lg inline-block mr-1">React</div>
                            <div className="bg-[#00C6BD] border py-1 px-8 rounded-lg inline-block">Redux</div>
                            <div className="flex mt-2">
                                <div className="bg-[#00C6BD] border py-1 px-8 rounded-lg inline-block mr-1">JavaScript</div>
                                <div className="bg-[#00C6BD] border py-1 px-8 rounded-lg inline-block">TailwindCSS</div>
                            </div>
                        </div>
                    </div>
                    <div className=" text-lg md:w-96 md:text-2xl md:pt-8">Backend
                        <div className="text-sm font-light md:h-10 md:pr-8 "> Mainly on premise I have a mongoDB mounted on and ubuntu raspberry pi that i use for all my current projects.
                        </div>
                        <div>
                            <div className="bg-blue-600 bg-opacity-40 my-3 mr-3 py-3 px-2 rounded-lg">
                                <div className="bg-[#00C6BD] border py-1 px-8 rounded-lg inline-block mr-1">MongoDB</div>
                                <div className="bg-[#00C6BD] border py-1 px-8 rounded-lg inline-block mr-1">Node.js</div>
                                <div className="flex mt-2">
                                    <div className="bg-[#00C6BD] border py-1 px-8 rounded-lg inline-block mr-1">Express</div>
                                    <div className="bg-[#00C6BD] border py-1 px-8 rounded-lg inline-block mr-1">Mongoose</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-7 md:w-96">
                        <div className="text-lg md:text-2xl">

                            Soft Skills
                        </div>
                        <div className=" md:text-md  mr-3">I like to work on teams and to be useful to other people.
                            I adapt to new enviorments easily and im a fast learner. <br />
                            Communicative. hardworking. Creative. or atleast i try :D
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default Skills;