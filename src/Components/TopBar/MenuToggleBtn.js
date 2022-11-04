import React from "react";
import Button from "../Button";

export default function MenuToggleBtn({ handleClick }) {
  return (
    <>
      <li className="list-inline-item">
        <Button
          type="button"
          className="button-menu-mobile open-left waves-effect"
          onClick={handleClick}
        >
          <i className="mdi mdi-menu"></i>
        </Button>
      </li>
    </>
  );
}
