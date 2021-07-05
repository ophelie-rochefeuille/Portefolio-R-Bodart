import React from "react";
 
export default props => (
  <div className="main_div_project_element">

    <iframe className="reader-pdf-project-component" src={props.block.pdf} width="100%" height="500px"></iframe>

  </div>
);