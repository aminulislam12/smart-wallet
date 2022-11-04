/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function SearchBar({ toggle, handleToggle }) {
  return (
    <>
      <div className={toggle ? "search-wrap open" : "search-wrap"}>
        <div className="search-bar">
          <input className="search-input" type="search" placeholder="Search" />
          <span className="close-search toggle-search">
            <i
              style={{ cursor: "pointer" }}
              className="mdi mdi-close-circle"
              onClick={handleToggle}
            ></i>
          </span>
        </div>
      </div>
    </>
  );
}
