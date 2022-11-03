import React from "react";
import { NavLink as Link } from "react-router-dom";

export default function TransctionAddBTN({ to, icon, className }) {
  return (
    <>
      <span className="float-right d-sm-block">
        <Link to={to} className={`btn btn-sm ${className} text-white`}>
          <i className={icon}></i> Add
        </Link>
      </span>
    </>
  );
}
