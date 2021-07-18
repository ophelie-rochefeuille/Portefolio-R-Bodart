 import React from "react";
    import { useParams } from "react-router";
    import projectData_1 from "../dataProjects/projectData_1";
    import projectData_2 from "../dataProjects/projectData_2";
    import projectData_3 from "../dataProjects/projectData_3";
    import projectData_4 from "../dataProjects/projectData_4";
    import Components from "./components";
    import "../portefolio/projectComponents/ProjectElements.scss";
    import Footer from "../footer/Footer";
    import dataProject from "../dataProjects/data";
    
    const project = dataProject[dataProject.length - 1];
    
    const ProjectPage = () => { 
    
    let { id }= useParams();
    console.log({id});
    
    
        if(id === "1") {
            return(
                <div className="main-div-project-page">
                  <div className="div-project-page">
                     {projectData_1.map(block => Components(block))}
                  </div>
                   
                <Footer />
              </div>  
            )
        } else if (id === "2") {
            return (
                <div className="main-div-project-page">
                  <div className="div-project-page">
                {projectData_2.map(block => Components(block))}
                </div>
                <Footer />
              </div> 
            )
        } else if (id === "3") {
          return (
              <div className="main-div-project-page">
                <div className="div-project-page">
              {projectData_3.map(block => Components(block))}
              </div>
              <Footer />
            </div> 
          )
      } else if (id === "4") {
        return (
            <div className="main-div-project-page">
              <div className="div-project-page">
            {projectData_4.map(block => Components(block))}
            </div>
            <Footer className='footer' />
          </div> 
        )
    } 
           
        }
    
        export default ProjectPage;
    