import React from "react";


const TransactionRow = (props) => {
    return (
        <tr className="row">
            <td>
                <div>
                    <span>{props.typeTransaction}</span>
                </div>
            </td>
            <td><span>{props.serial}</span></td>
            <td>{props.maker}</td>
            <td>{props.destiny}</td>
            <td>{props.date}</td>
        </tr>
    )
}
export default TransactionRow;