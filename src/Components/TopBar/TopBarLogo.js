import React from "react";
import { NavLink as Link } from "react-router-dom";
import Logo from "../assets/images/logos.png";

export default function TopBarLogo() {
  return (
    <>
      <div className="topbar-left d-none d-lg-block">
        <div className="text-center">
          <Link to="/" className="logo">
            <img src={Logo} height="40" alt="logo" />
          </Link>
        </div>
      </div>
    </>
  );
}
