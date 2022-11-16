import React from "react";
import { useLocation } from "react-router-dom";
import { useGlobalState } from "../Context/GlobalState";

export default function TableRow({ tnxdetails }) {
  const { deleteExpence, deleteIncome } = useGlobalState();
  const { id, description, date, category, account, amount } = tnxdetails;
  const newDate = new Date(date).toDateString().slice(4);
  const accounts = account.slice(0, 10);
  const location = useLocation();
  const path = location.pathname;
  const deleteFunction = () => {
    if (path === "/incomeList") {
      deleteIncome(id);
    } else if (path === "/expanceList") {
      deleteExpence(id);
    }
  };
  return (
    <tr>
      <th scope="row">{`#SF10${id}`}</th>
      <td>{description}</td>
      <td>{newDate}</td>
      <td>{category}</td>
      <td>{accounts}</td>
      <td>{`৳${amount}`}</td>
      <td>
        <span className="mr-1 actionbtn">
          <i className="fas fa-edit"></i>
        </span>
        <span className="actionbtn">
          <i className="far fa-trash-alt" onClick={deleteFunction}></i>
        </span>
      </td>
    </tr>
  );
}
