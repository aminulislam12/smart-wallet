import React from "react";

export default function Tbody({ children, ...rest }) {
  return <tbody {...rest}>{children}</tbody>;
}
