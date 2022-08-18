import React from "react";

const TransactionRow = (props) => {
  return (
    <tr className="row">
      <td>{props.hash}</td>
      <td>{props.typeTransaction}</td>
      <td>{props.serial}</td>
      <td>{props.maker}</td>
      <td>{props.destiny}</td>
      <td>{props.date}</td>
    </tr>
  );
};
export default TransactionRow;
