import React from "react";

export default function TermsList({ className, text }) {
  return (
    <p>
      <i className={`${className} text-primary mr-2`}></i> {text}
    </p>
  );
}
