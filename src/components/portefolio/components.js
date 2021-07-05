import React from "react";
import Paragraph_level from "./projectComponents/Paragraph_level" ;
import Subtitle_level from "./projectComponents/Subtitle_level";
import Title_level from "./projectComponents/Title_level";
import Background_main_picture from "./projectComponents/Background_main_picture";
import Explanatory_img from "./projectComponents/Explanatory_img";
import Explanatory_legend from "./projectComponents/Explanatory_legend";
import Paragraph_level_link from "./projectComponents/Paragraph_level_link";
import Pdf_reader from "./projectComponents/Pdf_reader";

const Components = {
  background_main_picture: Background_main_picture,
  subtitle_level: Subtitle_level,
  title_level: Title_level,
  paragraph_level: Paragraph_level,
  explanatory_img: Explanatory_img,
  explanatory_legend: Explanatory_legend,
  paragraph_level_link: Paragraph_level_link,
  pdf_reader: Pdf_reader
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
