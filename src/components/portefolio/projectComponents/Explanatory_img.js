import React from "react";
import "../projectComponents/ProjectElements.scss";
 
export default props => (
  <div className="main_div_project_element">

    <img src={props.block.explanatory_img} className="explanatory_img" alt="explanatory project"></img> 
  </div>
);