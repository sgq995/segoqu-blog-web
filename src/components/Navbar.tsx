import classNames from "classnames";
import React from "react";
import config from "../config";
import NavItem from "./NavItem";
import NavList from "./NavList";

function Navbar(): JSX.Element {
  const [lastScroll, setLastScroll] = React.useState(0);
  const [hidden, setHiden] = React.useState(false);
  const [bottom, setBottom] = React.useState(0);

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
    setBottom(navRef.current?.getBoundingClientRect().bottom ?? 0);

    window.addEventListener('scroll', handleWindowScroll, false);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll, false);
    }
  }, []);

  const className = classNames(
    'w-full py-4 flex justify-center',
    'sticky top-0 bg-white transition-transform transition-shadow duration-300 transform-gpu',
    {
      '-translate-y-full': hidden,
      'bg-opacity-60 shadow-lg backdrop-filter backdrop-blur-lg': !hidden && lastScroll > bottom
    }
  )

  const navList = (
    <NavList>
      <NavItem to="/">
        Home
      </NavItem>
    </NavList>
  );

  return (
    <>
      <nav ref={navRef} className={className}>
        <div className="w-full max-w-screen-lg px-8 flex justify-between">
          <NavItem to="/" className="flex-none">
            <b>segoqu</b>
          </NavItem>

          {config.device.isDesktop && navList}
        </div>
      </nav>

      {config.device.isMobile && (
        <nav className="w-full py-4 px-8 fixed bottom-0 bg-white shadow-top">
          <div className="w-full max-w-screen-lg flex justify-around">
            {navList}
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;
