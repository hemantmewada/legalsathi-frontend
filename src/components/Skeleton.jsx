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
      <div className="wa">
        <a href="https://wa.me/+919644888815?text=Hello"><img src="images/wa.png" alt="" /></a>
      </div>
    </div>
  );
};

export default Skeleton;
