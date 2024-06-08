import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Skeleton = () => {
  return (
    <div className="site-wrap" id="home-section">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Skeleton;
