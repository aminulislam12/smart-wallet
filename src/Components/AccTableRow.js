import React from "react";

export default function AccTableRow() {
  return (
    <tr>
      <th scope="row">#01</th>
      <td>The City Bank Ltd</td>
      <td>Aminul Islam</td>
      <td>230269709001</td>
      <td>
        <span className="badge badge-success">Bank</span>
      </td>
      <td>$125.00</td>
      <td>
        <span className="mr-1 actionbtn">
          <i className="fas fa-edit"></i>
        </span>
        <span className="actionbtn">
          <i className="far fa-trash-alt"></i>
        </span>
      </td>
    </tr>
  );
}
