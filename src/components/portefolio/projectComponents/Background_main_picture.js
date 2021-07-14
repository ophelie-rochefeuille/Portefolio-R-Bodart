import React from "react";
import "../projectComponents/ProjectElements.scss";
 
export default props => (
  <div className="main_picture_background">

    <img src={props.block.picture} className="main_picture_background" alt="background project"></img> 
  </div>
);