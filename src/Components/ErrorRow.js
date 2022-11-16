import React from "react";
import { useLocation } from "react-router-dom";

export default function ErrorRow() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <tr>
      <td
        colSpan="7"
        className="font-weight-bold"
        style={{ textAlign: "center" }}
      >
        {path === "/expanceList"
          ? "No Expence Transction Available !"
          : path === "/incomeList"
          ? "No Income Transction Available !"
          : path === "/accountList"
          ? "No Account Avaiable!"
          : null}
      </td>
    </tr>
  );
}
