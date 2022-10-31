import React from "react";

export default function Nav({ children, ...rest }) {
  return <ul {...rest}>{children}</ul>;
}
