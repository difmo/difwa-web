import React from "react";
import { Outlet } from "react-router-dom";
// import { Header } from "../header";
import Footer from "../Footer";
import { Navigation } from "../navigation";
function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
