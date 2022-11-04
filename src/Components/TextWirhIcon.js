import React from "react";

export default function TextWirhIcon({ icon, text }) {
  return (
    <>
      {text} <i className={icon}></i>
    </>
  );
}
