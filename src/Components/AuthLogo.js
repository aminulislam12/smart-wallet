import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthLogo({ image, alt, size }) {
  return (
    <>
      <div>
        <NavLink to="/" className="logo logo-admin">
          <img src={image} height={size} alt={alt} />
        </NavLink>
      </div>
    </>
  );
}
