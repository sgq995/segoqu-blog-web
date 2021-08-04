import React from "react";

interface FooterProps {
  className?: string | undefined;
}

function Footer({
  className
}: FooterProps): JSX.Element {
  return (
    <footer className={`w-full py-8 bg-black text-center text-white ${className ?? ''}`}>
      <p className="text-sm">&copy; Sebastian Gonzalez Quintero</p>
    </footer>
  );
}

export default Footer;
