import React from "react";

import ProjectsCard from "./projectsCard";

const Projects = () => {

    return (<div id='projects'>
        <div className="text-4xl pt-[10vh] mx-5 tracking-wider">Hosted projects.</div>
        <div className="text-sm mt-6 mx-5">The projects worth showing that i've made, these are all hosted and some are fully functional while others are mockups.</div>
        <ProjectsCard />
    </div>);
};

export default Projects;