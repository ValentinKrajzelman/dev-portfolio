import React from "react";

import ProjectsCard from "./projectsCard";

const Projects = () => {

    return (
        <div className="md:ml-28 md:mr-16 mb-20 pt-10 " id='projects'>
            <div className="text-4xl md:text-5xl mx-5 tracking-wider">Hosted projects.</div>
            <div className="text-sm mt-6 mx-5 md:text-xl">The projects worth showing that i've made, these are all hosted and some are fully functional while others are mockups.</div>
            <ProjectsCard />
        </div>
    );
};

export default Projects;