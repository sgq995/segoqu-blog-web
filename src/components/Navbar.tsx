import classNames from "classnames";
import React from "react";
import config from "../config";
import { route, ROUTE_HOME } from "../utils/sitemap";
import NavItem from "./NavItem";
import NavList from "./NavList";

function Navbar(): JSX.Element {
  const [lastScroll, setLastScroll] = React.useState(0);
  const [hidden, setHiden] = React.useState(false);
  const [threshold, setThreshold] = React.useState(0);

  const navRef = React.useRef<HTMLElement>(null);

  const handleWindowScroll = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      setHiden(false);
    }

    setLastScroll((lastScroll) => {
      if (currentScroll > lastScroll) {
        setHiden(true);
      } else {
        setHiden(false);
      }

      return currentScroll;
    });
  }

  React.useEffect(() => {
    setThreshold(
      navRef.current
       ? (navRef.current.getBoundingClientRect().bottom + navRef.current.getBoundingClientRect().top) / 2
       : 0
    );

    window.addEventListener('scroll', handleWindowScroll, false);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll, false);
    }
  }, []);

  const className = classNames(
    'w-full py-4 flex justify-center',
    'sticky top-0 z-index-50 transition-transform transition-shadow duration-300 transform-gpu',
    {
      '-translate-y-full': hidden,
      'bg-white bg-opacity-60 shadow-lg backdrop-filter backdrop-blur-lg': !hidden && (lastScroll > threshold)
    }
  )

  return (
    <>
      <nav ref={navRef} className={className}>
        <div className="w-full max-w-screen-lg px-8 flex justify-between items-center">
          <NavItem to={route(ROUTE_HOME)} className="flex-none text-xl italic font-black leading-6">
            segoqu
          </NavItem>

          {config.device.isDesktop && (
            <NavList>
              <NavItem to={route(ROUTE_HOME)}>
                Home
              </NavItem>
            </NavList>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
