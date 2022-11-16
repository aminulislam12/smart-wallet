import React from "react";

export default function Option({ options, value }) {
  return (
    <>
      <option style={{ textTransform: "capitalize" }} value={value}>
        {options}
      </option>
    </>
  );
}
