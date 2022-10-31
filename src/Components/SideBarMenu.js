/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logos from "./assets/images/color-logo.png";
import Button from "./Button";
import Nav from "./Nav";
import NavItem from "./NavItem";
import NavLink from "./NavLink";

export default function SideBarMenu() {
  const [toggleIncome, settoggleIncome] = useState(false);
  const [toggleExpense, setToggleExpense] = useState(false);
  const [toggleAccount, setToggleAccount] = useState(false);

  const handleClick = () => {
    let wrapper = document.getElementById("wrapper");
    let body = document.getElementById("domact");
    console.log(body);
    wrapper.classList.toggle("enlarged");
    body.classList.toggle("fixed-left-void");
  };

  return (
    <>
      <div className="left side-menu">
        <Button
          type="button"
          className="button-menu-mobile button-menu-mobile-topbar open-left waves-effect"
          onClick={handleClick}
        >
          <i className="mdi mdi-close"></i>
        </Button>
        {/* <!--Logo--> */}
        <div className="left-side-logo d-block d-lg-none">
          <div className="text-center">
            <a href="/" className="logo">
              <img src={Logos} height="40" alt="logo" />
            </a>
          </div>
        </div>
        {/* <!--SideBar--> */}
        <div className="sidebar-inner">
          <div id="sidebar-menu">
            <Nav>
              <NavItem className="menu-title">Main</NavItem>
              <NavItem>
                <NavLink href="/" icon="dripicons-home" text="Deshbord" />
              </NavItem>
              <NavItem
                className={`${toggleIncome ? "has_sub nav-active" : ""}`}
                onClick={() => settoggleIncome(!toggleIncome)}
              >
                <NavLink href="#" icon="fas fa-coins" text="Income">
                  <span className="menu-arrow float-right">
                    <i className="mdi mdi-chevron-right"></i>
                  </span>
                </NavLink>
                <Nav className="list-unstyled">
                  <NavItem>
                    <NavLink
                      href="/addIncome"
                      icon="mdi mdi-credit-card-plus"
                      text="Add Income"
                    />
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/incomeList"
                      icon="far fa-list-alt"
                      text="Income List"
                    />
                  </NavItem>
                </Nav>
              </NavItem>

              <NavItem
                className={`${toggleExpense ? "has_sub nav-active" : ""}`}
                onClick={() => setToggleExpense(!toggleExpense)}
              >
                <NavLink href="#" icon="fab fa-cc-amazon-pay" text="Expense">
                  <span className="menu-arrow float-right">
                    <i className="mdi mdi-chevron-right"></i>
                  </span>
                </NavLink>
                <Nav className="list-unstyled">
                  <NavItem>
                    <NavLink
                      href="/addExpense"
                      icon="mdi mdi-credit-card-plus"
                      text="Add Expance"
                    />
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/expenceList"
                      icon="far fa-list-alt"
                      text="Expance List"
                    />
                  </NavItem>
                </Nav>
              </NavItem>
              <NavItem
                className={`${toggleAccount ? "has_sub nav-active" : ""}`}
                onClick={() => setToggleAccount(!toggleAccount)}
              >
                <NavLink icon="fas fa-university" text="Account">
                  <span className="menu-arrow float-right">
                    <i className="mdi mdi-chevron-right"></i>
                  </span>
                </NavLink>
                <Nav className="list-unstyled">
                  <NavItem>
                    <NavLink
                      href="/addAccount"
                      icon="far fa-credit-card"
                      text="Add Account"
                    />
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/accountList"
                      icon="far fa-list-alt"
                      text="Account List"
                    />
                  </NavItem>
                </Nav>
              </NavItem>
              <NavItem>
                <NavLink icon="far fa-user" text="Profile" />
              </NavItem>
              <NavItem>
                <NavLink
                  href="/appsettings"
                  icon="dripicons-gear"
                  text="Settings"
                />
              </NavItem>
            </Nav>
          </div>
          <div className="clearfix"></div>
        </div>
        {/* <!-- end sidebarinner --> */}
      </div>
    </>
  );
}
