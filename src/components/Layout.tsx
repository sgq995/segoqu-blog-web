import classNames from "classnames";
import React from "react";
import config from "../config";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

function Layout({
  children
}: LayoutProps): JSX.Element {
  const footerClassName = classNames(
    {
      'mb-14': config.device.isMobile
    }
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100">
      <Navbar />

      <main className="w-full max-w-screen-md px-8 py-4 flex-grow flex-shrink-0">
        {children}
      </main>

      <Footer className={footerClassName} />

      {config.device.isMobile && (
        <MobileNav />
      )}
    </div>
  );
}

export default Layout;
