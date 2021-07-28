import React from "react";
import { CgMenu } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import Navlinks from "./Sidebarlinks";

function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <CgMenu
      className="hamburger"
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <IoIosClose
      className="closeIcon"
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <div>
      <div className="mobileNavigation">
        <Navlinks />
      </div>
      {open ? closeIcon : hamburgerIcon}
      {open && <Navlinks />}
    </div>
  );
}

export default MobileNavigation;
