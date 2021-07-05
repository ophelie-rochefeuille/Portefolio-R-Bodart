import React from "react";
 
export default props => (
  <div className="main_div_project_element">

    <p className="legend-project-component">{props.block.explanatory_legend} <a className="link-component" href={props.block.url}>{props.block.url_viewer}</a></p>
  </div>
);