import React from "react";
import NavItem from "./NavItem";

import { route, ROUTE_HOME } from "../utils/sitemap";

import { IoHomeOutline } from "react-icons/io5";

function MobileNavbar() {
  return (
    <nav className="w-full py-4 px-8 fixed bottom-0 bg-white shadow-top">
      <div className="w-full max-w-screen-lg flex justify-around">
        <NavItem to={route(ROUTE_HOME)}>
          <IoHomeOutline size={24} />
        </NavItem>
      </div>
    </nav>
  );
}

export default MobileNavbar;
