import React from "react";

export default function NavItem({ children, ...rest }) {
  return (
    <>
      <li {...rest}>{children}</li>
    </>
  );
}
