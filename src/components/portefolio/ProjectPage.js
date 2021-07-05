import React, { useState } from "react";
import { useParams } from "react-router";
import '../projectData_1';
import projectData_1 from "../projectData_1";
import projectData_2 from "../projectData_2";
import projectData_3 from "../projectData_3";
import projectData_4 from "../projectData_4";
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
    } else if (id === "3") {
      return (
          <div>
          {projectData_3.map(block => Components(block))}
        </div> 
      )
  } else if (id === "4") {
    return (
        <div>
        {projectData_4.map(block => Components(block))}
      </div> 
    )
} 
        
       
    }

    export default ProjectPage;



