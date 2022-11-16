import React from "react";

export default function TotalTableRow({ total }) {
  return (
    <tr>
      <td colSpan="4"></td>
      <td className="font-weight-bold">Total</td>
      <td colSpan="2" className="font-weight-bold">
        ৳ {total}
      </td>
    </tr>
  );
}
