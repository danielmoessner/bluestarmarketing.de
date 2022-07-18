import React from "react";
import Navigation from "./Navigation";
import OldNavigation from "./OldNavigation";

function Layout({ children, hide = false }) {
  return (
    <>
      {hide ? <OldNavigation /> : <Navigation />}
      <main>{children}</main>
    </>
  );
}

export default Layout;
