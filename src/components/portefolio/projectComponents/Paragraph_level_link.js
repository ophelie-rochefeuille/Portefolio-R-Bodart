import React from "react";
 
export default props => (
  <div className="main_div_project_element">

    <p className="paragraph-project-component">{props.block.paragraph_start}<a className="link-component" href={props.block.link_1}>{props.block.link_1}</a>{props.block.paragraph_middle}<a className="link-component" href={props.block.link_2}>{props.block.link_2}</a>{props.block.paragraph_end}</p>

  </div>
);