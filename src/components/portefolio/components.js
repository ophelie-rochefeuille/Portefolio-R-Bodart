import React from "react";
import Paragraph_level from "./projectComponents/Paragraph_level" ;
import Subtitle_level_1 from "./projectComponents/Subtitle_level_1";
import Title_level_1 from "./projectComponents/Title_level_1";

const Components = {
  title_level_1: Title_level_1,
  subtitle_level_1: Subtitle_level_1,
  paragraph_level: Paragraph_level
};

export default block => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
