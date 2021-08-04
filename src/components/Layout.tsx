import React from "react";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

function Layout({
  children
}: LayoutProps): JSX.Element {
  return (
    <div className="max-w-full min-h-screen flex flex-col items-center">
      <main className="w-screen max-w-screen-lg px-8 flex-grow flex-shrink-0 shadow-inner">
        {children}
      </main>

      <footer className="min-h-12">
        Test
      </footer>
    </div>
  );
}

export default Layout;
