import React from "react";
 
export default props => (
  <div className="foo">

    <iframe src={props.block.pdf} width="100%" height="500px"></iframe>

  </div>
);