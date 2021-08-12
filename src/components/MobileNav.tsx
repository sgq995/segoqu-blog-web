import React from "react";
import NavItem from "./NavItem";

function MobileNav() {
  return (
    <nav className="w-full py-4 px-8 fixed bottom-0 bg-white shadow-top">
      <div className="w-full max-w-screen-lg flex justify-around">
        <NavItem to="/">
          Home
        </NavItem>
      </div>
    </nav>
  );
}

export default MobileNav;
