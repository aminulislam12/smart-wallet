import React, { useState } from "react";
import NavItem from "../NavItem";
import NavLink from "../NavLink";
import TextWirhIcon from "../TextWirhIcon";
import TopDropdown from "../TopBar/TopDropdown";

export default function TopCreateMenu() {
  const [createbtn, setCreateBtn] = useState(false);
  return (
    <>
      <NavItem
        className={
          createbtn
            ? "list-inline-item dropdown notification-list d-none d-sm-inline-block show"
            : "list-inline-item dropdown notification-list d-none d-sm-inline-block"
        }
      >
        <NavLink
          className="nav-link dropdown-toggle arrow-none"
          to="#"
          onClick={() => setCreateBtn(!createbtn)}
        >
          <TextWirhIcon text="Create New" icon="mdi mdi-plus" />
        </NavLink>
        <TopDropdown className={createbtn ? "show top-inline" : ""}>
          <NavLink className="dropdown-item" to="/addIncome">
            Income
          </NavLink>
          <NavLink className="dropdown-item" to="/addExpance">
            Expance
          </NavLink>
        </TopDropdown>
      </NavItem>
    </>
  );
}
