/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function SearchIcon({ handleToggle }) {
  return (
    <>
      <li className="list-inline-item dropdown notification-list">
        <span className="nav-link waves-effect toggle-search">
          <i className="mdi mdi-magnify noti-icon" onClick={handleToggle}></i>
        </span>
      </li>
    </>
  );
}
