import React, { Children } from "react";

interface NavListProps {
  children: JSX.Element[] | JSX.Element;
}

function NavList({
  children
}: NavListProps): JSX.Element {
  return (
    <ul className="list-none flex-none flex">
      {Children.map(children, (child, index) => (
        <li key={index}>
          {child}
        </li>
      ))}
    </ul>
  );
}

export default NavList;
