import React from "react";

export default function TableRow() {
  return (
    <tr>
      <th scope="row">#14567</th>
      <td>Michael Mitchell</td>
      <td>14 Jan 2022</td>
      <td>Thu 06:53 PM</td>
      <td>Salary</td>
      <td>
        <span className="badge badge-success">Cash</span>
      </td>
      <td>$148</td>
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
