import {fireEvent, render, screen} from "@testing-library/react";
import MarketRow from "./MarketRow";
import * as UserService from "../../services/userService";

const transaction = {
    owner: 'test@email.com',
    serial: 12345,
    price: 50
}

const object = {
    public_key: "Public key",
    private_key: "Private key",
};

const cont = 5;
const project = 'Test';

describe("MarketRow", () => {

    beforeEach(() => {
        render(<MarketRow keys={object} num={cont} project={project} user={transaction.owner}
                          serial={transaction.serial} price={transaction.price}/>);
    });

    it("should render appropriately", () => {
       expect(screen.getByText(/test@email.com/i)).toBeInTheDocument();
       expect(screen.getByText(/12345/i)).toBeInTheDocument();
       expect(screen.getByText(/50/i)).toBeInTheDocument();
       expect(screen.getByText(/Comprar/i)).toBeInTheDocument();
    });

    it("should call getUserKeys service", () => {
       const getUserKeysMock = jest.spyOn(UserService, "getUserKeys");
       const button = screen.getByText(/Comprar/i);

       fireEvent.click(button);
       expect(getUserKeysMock).toHaveBeenCalled();
    });
});