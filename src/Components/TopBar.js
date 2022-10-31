/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "./assets/images/logos.png";
import avator from "./assets/images/users/avatar-6.jpg";

export default function TopBar() {
  const handleClick = () => {
    let wrapper = document.getElementById("wrapper");
    let body = document.getElementById("domact");
    console.log(body);
    wrapper.classList.toggle("enlarged");
    body.classList.toggle("fixed-left-void");
  };
  return (
    <>
      {/* <!-- Top Bar Start --> */}
      <div className="topbar">
        <div className="topbar-left d-none d-lg-block">
          <div className="text-center">
            <a href="index.html" className="logo">
              <img src={Logo} height="40" alt="logo" />
            </a>
          </div>
        </div>

        <nav className="navbar-custom">
          {/* <!-- Search input --> */}
          <div className="search-wrap" id="search-wrap">
            <div className="search-bar">
              <input
                className="search-input"
                type="search"
                placeholder="Search"
              />
              <a
                href="#"
                className="close-search toggle-search"
                data-target="#search-wrap"
              >
                <i className="mdi mdi-close-circle"></i>
              </a>
            </div>
          </div>

          <ul className="list-inline float-right mb-0">
            <li className="list-inline-item dropdown notification-list">
              <a
                className="nav-link waves-effect toggle-search"
                href="#"
                data-target="#search-wrap"
              >
                <i className="mdi mdi-magnify noti-icon"></i>
              </a>
            </li>

            <li className="list-inline-item dropdown notification-list nav-user">
              <a
                className="nav-link dropdown-toggle arrow-none waves-effect"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img src={avator} alt="user" className="rounded-circle" />
                <span className="d-none d-md-inline-block ml-1">
                  David M. Bailey <i className="mdi mdi-chevron-down"></i>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
                <a className="dropdown-item" href="#">
                  <i className="dripicons-user text-muted"></i> Profile
                </a>
                <a className="dropdown-item" href="#">
                  <span className="badge badge-success float-right m-t-5">
                    5
                  </span>
                  <i className="dripicons-gear text-muted"></i> Settings
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="dripicons-exit text-muted"></i> Logout
                </a>
              </div>
            </li>
          </ul>

          <ul className="list-inline menu-left mb-0">
            <li className="list-inline-item">
              <button
                type="button"
                className="button-menu-mobile open-left waves-effect"
                onClick={handleClick}
              >
                <i className="mdi mdi-menu"></i>
              </button>
            </li>
            <li className="list-inline-item dropdown notification-list d-none d-sm-inline-block">
              <a
                className="nav-link dropdown-toggle arrow-none waves-effect"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                Create New <i className="mdi mdi-plus"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-animated">
                <a className="dropdown-item" href="#">
                  Income
                </a>
                <a className="dropdown-item" href="#">
                  Expance
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- Top Bar End --> */}
    </>
  );
}
