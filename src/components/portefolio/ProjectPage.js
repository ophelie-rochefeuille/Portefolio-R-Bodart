import React, { useState } from "react";
import { useParams } from "react-router";
import '../projectData_1';
import projectData_1 from "../projectData_1";
import projectData_2 from "../projectData_2";
import Components from "./components";



const ProjectPage = () => { 

let { id }= useParams();
console.log({id});


    if(id === "1") {
        return(
            <div>
            {projectData_1.map(block => Components(block))}
          </div>  
        )
    } else if (id === "2") {
        return (
            <div>
            {projectData_2.map(block => Components(block))}
          </div> 
        )
    }
        
       
    }

    export default ProjectPage;



