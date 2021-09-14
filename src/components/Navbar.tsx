import classNames from "classnames";
import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useHistory, useLocation } from "react-router-dom";
import config from "../config";
import { route, ROUTE_HOME } from "../utils/sitemap";
import NavItem from "./NavItem";
import NavList from "./NavList";

function Navbar(): JSX.Element {
  const history = useHistory();
  const location = useLocation();

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
      'bg-white bg-opacity-80 shadow-lg backdrop-filter backdrop-blur-lg': !hidden && (lastScroll > threshold)
    }
  )

  return (
    <>
      <nav ref={navRef} className={className}>
        <div className="w-full max-w-screen-md px-8 flex justify-between items-center">
          <div className="flex-none flex items-center">
            {location.pathname !== route(ROUTE_HOME) && (
              <button onClick={() => history.goBack()}>
                <IoArrowBack size={24} className="mr-2" />
              </button>
            )}

            <NavItem to={route(ROUTE_HOME)} className="text-xl italic font-black leading-6">
              segoqu
            </NavItem>
          </div>

          {config.device.isDesktop && (
            <NavList>
              <NavItem exact to={route(ROUTE_HOME)}>
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
