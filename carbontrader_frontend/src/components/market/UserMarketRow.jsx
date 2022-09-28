import React from "react";

const UserMarketRow = (props) => {
  return (
    <tr className="row">
      <td>{props.email}</td>
      <td>{props.amount}</td>
    </tr>
  );
};
export default UserMarketRow;