import React from "react";
import { NavLink as Link } from "react-router-dom";

export default function NavLink({
  className,
  icon,
  text,
  to,
  children,
  ...rest
}) {
  return (
    <Link to={to} className={`waves-effect`} exact {...rest}>
      {children}
    </Link>
  );
}
