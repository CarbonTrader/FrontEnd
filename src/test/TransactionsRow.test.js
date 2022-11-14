import {render, screen} from "@testing-library/react";
import TransactionRow from "../components/globalTransactions/TransactionsRow";

const transaction = {
    hash: 'hash',
    transaction_type: 'exchange',
    carbon_trader_serial: '12345',
    sender_address: 'sender@example.com',
    recipient_address: 'recipient@example.com',
    timestamp: 1666137775248349948
};

describe("TransactionsRow Component", () => {
    it("should render appropriately", () => {
        render(<TransactionRow hash={transaction.hash} typeTransaction={transaction.transaction_type}
                               serial={transaction.carbon_trader_serial} maker={transaction.sender_address}
                               destiny={transaction.recipient_address} date={transaction.timestamp}/>);
        expect(screen.getByText(/hash/i)).toBeInTheDocument();
        expect(screen.getByText(/exchange/i)).toBeInTheDocument();
        expect(screen.getByText(/12345/i)).toBeInTheDocument();
        expect(screen.getByText(/sender@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/recipient@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/18\/10\/2022/i)).toBeInTheDocument();
    });
});