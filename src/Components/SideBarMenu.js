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
        <div className="left-side-logo d-block d-lg-none">
          <div className="text-center">
            <NavLink to="/" className="logo">
              <img src={Logos} height="40" alt="logo" />
            </NavLink>
          </div>
        </div>
        <div className="sidebar-inner">
          <div id="sidebar-menu">
            <Nav>
              <NavItem className="menu-title">Main</NavItem>
              <NavItem
                onClick={() => {
                  setToggleExpense(false);
                  settoggleIncome(false);
                  setToggleAccount(false);
                }}
              >
                <NavLink to="/">
                  <i className="dripicons-home"></i>
                  <span> Dashboard </span>
                </NavLink>
              </NavItem>
              <NavItem
                className={`${toggleIncome ? "has_sub active nav-active" : ""}`}
              >
                <a className="waves-effect">
                  <i className="fas fa-coins"></i>
                  <span
                    onClick={() => {
                      settoggleIncome(!toggleIncome);
                      setToggleExpense(false);
                      setToggleAccount(false);
                    }}
                  >
                    {" "}
                    Income{" "}
                  </span>
                  <span
                    className="menu-arrow float-right"
                    onClick={() => {
                      settoggleIncome(!toggleIncome);
                      setToggleExpense(false);
                      setToggleAccount(false);
                    }}
                  >
                    <i className="mdi mdi-chevron-right"></i>
                  </span>
                </a>
                <Nav className="list-unstyled">
                  <NavItem>
                    <NavLink to="/addIncome">
                      <i className="mdi mdi-credit-card-plus"></i> Add Income
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/incomeList">
                      <i className="far fa-list-alt"></i> Income List
                    </NavLink>
                  </NavItem>
                </Nav>
              </NavItem>
              <NavItem
                className={`${toggleExpense ? "has_sub nav-active" : ""}`}
              >
                <a className="waves-effect">
                  <i className="fab fa-cc-amazon-pay"></i>
                  <span
                    onClick={() => {
                      setToggleExpense(!toggleExpense);
                      settoggleIncome(false);
                      setToggleAccount(false);
                    }}
                  >
                    {" "}
                    Expance{" "}
                  </span>
                  <span
                    className="menu-arrow float-right"
                    onClick={() => {
                      setToggleExpense(!toggleExpense);
                      settoggleIncome(false);
                      setToggleAccount(false);
                    }}
                  >
                    <i className="mdi mdi-chevron-right"></i>
                  </span>
                </a>
                <Nav className="list-unstyled">
                  <NavItem>
                    <NavLink to="/addExpance">
                      <i className="mdi mdi-credit-card-plus"></i> Add Expance
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/expanceList">
                      <i className="far fa-list-alt"></i> Expance List
                    </NavLink>
                  </NavItem>
                </Nav>
              </NavItem>
              <NavItem
                className={`${toggleAccount ? "has_sub nav-active" : ""}`}
              >
                <a className="waves-effect">
                  <i className="fas fa-university"></i>
                  <span
                    onClick={() => {
                      setToggleAccount(!toggleAccount);
                      setToggleExpense(false);
                      settoggleIncome(false);
                    }}
                  >
                    {" "}
                    Account{" "}
                  </span>
                  <span
                    className="menu-arrow float-right"
                    onClick={() => {
                      setToggleAccount(!toggleAccount);
                      setToggleExpense(false);
                      settoggleIncome(false);
                    }}
                  >
                    <i className="mdi mdi-chevron-right"></i>
                  </span>
                </a>
                <Nav className="list-unstyled">
                  <NavItem>
                    <NavLink to="/addAccount">
                      <i className="far fa-credit-card"></i> Add Account
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/accountList">
                      <i className="far fa-list-alt"></i> Account List
                    </NavLink>
                  </NavItem>
                </Nav>
              </NavItem>
              <NavItem>
                <NavLink to="/profile">
                  <i className="far fa-user"></i>
                  <span> Profile </span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/appsettings">
                  <i className="dripicons-gear"></i>
                  <span> Settings </span>
                </NavLink>
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
