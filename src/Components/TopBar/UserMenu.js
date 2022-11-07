import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import avator from "../assets/images/images.png";
import NavItem from "../NavItem";
import NavLink from "../NavLink";
import TextWirhIcon from "../TextWirhIcon";
import TopDropdown from "./TopDropdown";

export default function UserMenu() {
  const [toggle, setToggle] = useState(false);
  const { currentUser, logout } = useAuth();

  const toggleHandle = () => {
    setToggle(false);
  };

  return (
    <>
      <NavItem
        className={
          toggle
            ? "list-inline-item dropdown notification-list nav-user show"
            : "list-inline-item dropdown notification-list nav-user"
        }
      >
        <span
          className="nav-link dropdown-toggle arrow-none"
          role="button"
          onClick={() => setToggle(!toggle)}
        >
          <img src={avator} alt="user" className="rounded-circle" />
          <span className="d-none d-md-inline-block ml-2">
            <TextWirhIcon
              text={currentUser.displayName}
              icon="mdi mdi-chevron-down"
            />
          </span>
        </span>
        <TopDropdown
          className={
            toggle
              ? "dropdown-menu-right profile-dropdown show"
              : "dropdown-menu-right profile-dropdown"
          }
        >
          <NavLink
            className="dropdown-item"
            to="/profile"
            onClick={toggleHandle}
          >
            <i className="dripicons-user text-muted"></i> Profile
          </NavLink>
          <NavLink
            className="dropdown-item"
            to="/appSetting"
            onClick={toggleHandle}
          >
            <i className="dripicons-gear text-muted"></i> Settings
          </NavLink>
          <span className="dropdown-item" onClick={logout}>
            <i className="dripicons-exit text-muted"></i> Logout
          </span>
        </TopDropdown>
      </NavItem>
    </>
  );
}
