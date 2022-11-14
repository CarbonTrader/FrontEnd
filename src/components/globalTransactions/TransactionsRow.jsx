import React from "react";

const TransactionRow = (props) => {
  return (
      <table>
          <tbody>
          <tr className="row">
              <td>{props.hash}</td>
              <td>{props.typeTransaction}</td>
              <td>{props.serial}</td>
              <td>{props.maker}</td>
              <td>{props.destiny}</td>
              <td>{new Date(props.date / 1000000).toLocaleDateString()}</td>
          </tr>
          </tbody>

      </table>

  );
};
export default TransactionRow;
