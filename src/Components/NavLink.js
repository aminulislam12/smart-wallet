import React from "react";

export default function NavLink({
  className,
  icon,
  text,
  href,
  children,
  ...rest
}) {
  return (
    <>
      <a href={href} className={`waves-effect ${className}`} {...rest}>
        <i className={icon}></i>
        <span> {text} </span>
        {children}
      </a>
    </>
  );
}
