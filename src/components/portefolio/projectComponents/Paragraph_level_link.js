import React from "react";
 
export default props => (
  <div className="foo">

    <p>{props.block.paragraph_start}<a href={props.block.link_1}>{props.block.link_1}</a>{props.block.paragraph_middle}<a href={props.block.link_2}>{props.block.link_2}</a>{props.block.paragraph_end}</p>

  </div>
);