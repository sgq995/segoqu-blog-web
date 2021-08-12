import classNames from "classnames";
import React from "react";
import config from "../config";

interface FooterProps {
  className?: string | undefined;
}

function Footer({
  className
}: FooterProps): JSX.Element {
  const footerClassName = classNames(
    'w-full py-8 bg-black text-center text-white',
    className
  );

  return (
    <footer className={footerClassName}>
      <p className="text-sm">&copy; Sebastian Gonzalez Quintero</p>
    </footer>
  );
}

export default Footer;
