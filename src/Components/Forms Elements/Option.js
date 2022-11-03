import React from "react";

export default function Option({ options, value }) {
  return (
    <>
      <option value={value}>{options}</option>
    </>
  );
}
