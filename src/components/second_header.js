import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SecondHeaderCss from "./secondHeader.module.css";

const SecondHeaderTags = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={SecondHeaderCss.tagscontanir}>
        <a href="#" className={SecondHeaderCss.atag}>
          About us
        </a>
        <a href="#" className={SecondHeaderCss.atag}>
          Initiatives
        </a>
        <a href="#" className={SecondHeaderCss.atag}>
          Blog
        </a>
        <a href="#" className={SecondHeaderCss.atag}>
          Contact us
        </a>
      </div>

      <div className={SecondHeaderCss.tagContainer}>
        <div
          className={SecondHeaderCss.sidenav}
          style={{ width: isOpen ? "250px" : "0" }}
        >
          <CloseIcon className={SecondHeaderCss.closebtn} onClick={closeNav} />
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
          <MenuIcon id={SecondHeaderCss.menubtn} />
        </span>
      </div>
    </>
  );
};

export default SecondHeaderTags;
