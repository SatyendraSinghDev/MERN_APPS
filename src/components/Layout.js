import React from "react";
import { Outlet } from "react-router-dom"; // Outlet is used for parent route to render its child routes, This allow nested UI
import Footer from "./Footer";
import Header from "./Header";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
