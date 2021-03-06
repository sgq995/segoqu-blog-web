import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface NavItemProps extends NavLinkProps {
  // children: JSX.Element[] | JSX.Element;
}

function NavItem({
  children,
  ...navLinkProps
}: NavItemProps): JSX.Element {
  return (
    <NavLink className="font-normal" activeClassName="font-semibold" {...navLinkProps as NavLinkProps}>
      {children}
    </NavLink>
  );
}

export default NavItem;
