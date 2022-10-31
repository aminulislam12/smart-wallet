import React from "react";

export default function Thead({ children, ...rest }) {
  return (
    <thead {...rest}>
      <tr>{children}</tr>
    </thead>
  );
}
