import React from "react";
 
export default props => (
  <div className="foo">

    <p>{props.block.explanatory_legend} <a href={props.block.url}>{props.block.url_viewer}</a></p>
  </div>
);