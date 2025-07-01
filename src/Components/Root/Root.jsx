import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="text-center py-1 text-sm">
        <span className="text-gray-500">
          OEP LICENSE # 0711 / RWP Serving since over 3 Decades
        </span>{" "}
        |{" "}
        <a className="text-[#8b1215] font-medium" href="">
          info@khawajamanpower.com
        </a>{" "}
        |{" "}
        <a className="text-[#8b1215] font-medium" href="">
          +923134289999
        </a>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
