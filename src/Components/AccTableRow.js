import React from "react";
import { useGlobalState } from "../Context/GlobalState";

export default function AccTableRow({ tnxDetails }) {
  const { id, bank_name, account_name, acc_number, acc_type, balance } =
    tnxDetails;
  const { deleteAccount } = useGlobalState();
  return (
    <tr>
      <th scope="row">{`#SF10${id}`}</th>
      <td>{bank_name}</td>
      <td>{account_name}</td>
      <td>{acc_number}</td>
      <td>
        <span
          className={`badge ${
            acc_type === "bank" ? "badge-success" : "badge-danger"
          }`}
        >
          {acc_type}
        </span>
      </td>
      <td>{balance}</td>
      <td>
        <span className="mr-1 actionbtn">
          <i className="fas fa-edit"></i>
        </span>
        <span className="actionbtn">
          <i className="far fa-trash-alt" onClick={() => deleteAccount(id)}></i>
        </span>
      </td>
    </tr>
  );
}
