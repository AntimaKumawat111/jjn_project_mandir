import React from "react";
import hanumanCss from "./hanumanImage.module.css";

function HanumanImage() {
  return (
    <>
      <img src={"/images/hanuman_1.png"} alt=""  id={hanumanCss.hanuman}/>
    </>
  );
}

export default HanumanImage;
