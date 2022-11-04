/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Nav from "./Nav";
import MenuToggleBtn from "./TopBar/MenuToggleBtn";
import SearchBar from "./TopBar/SearchBar";
import SearchIcon from "./TopBar/SearchIcon";
import TopBarLogo from "./TopBar/TopBarLogo";
import TopCreateMenu from "./TopBar/TopCreateMenu";
import UserMenu from "./TopBar/UserMenu";

export default function TopBar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClick = () => {
    let wrapper = document.getElementById("wrapper");
    let body = document.getElementById("domact");
    wrapper.classList.toggle("enlarged");
    body.classList.toggle("fixed-left-void");
  };

  return (
    <>
      <div className="topbar">
        <TopBarLogo />

        <nav className="navbar-custom">
          <SearchBar toggle={toggle} handleToggle={handleToggle} />

          <Nav className="list-inline float-right mb-0">
            <SearchIcon toggle={toggle} handleToggle={handleToggle} />
            <UserMenu />
          </Nav>

          <Nav className="list-inline menu-left mb-0">
            <MenuToggleBtn handleClick={handleClick} />
            <TopCreateMenu />
          </Nav>
        </nav>
      </div>
    </>
  );
}
