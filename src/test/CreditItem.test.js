import {fireEvent, render, screen} from "@testing-library/react";
import CreditItem from "../components/profile/creditItem";
import * as CreditService from "../services/CreditService";
import * as UserService from "../services/userService";

const projectResult = {
    response: {
        projectId: '001'
    }
};

describe("CreditItem component", () => {

    const {location} = window;

    beforeAll(() => {
        window.alert = jest.fn();
        delete window.location;
        window.location = {reload: jest.fn()};
    });

    afterAll(() => {
        window.location = location;
    });

    beforeEach(() => {
        render(<CreditItem name={'name'} project={'001'} public_key={'Public Key'} private_key={'Private Key'}
                           amount={5}/>);
    });

    it("should render appropriately", () => {
        expect(screen.getByText(/name/i)).toBeInTheDocument();
        expect(screen.getByText(/5/i)).toBeInTheDocument();
        expect(screen.getByText(/Retirar/i)).toBeInTheDocument();
        expect(screen.getByText(/Vender/i)).toBeInTheDocument();
    });

    it("should call getProject service", () => {
        const getProjectMock = jest.spyOn(CreditService, "getProject");
        getProjectMock.mockResolvedValue(projectResult);
        const button = screen.getByText(/Vender/i);

        fireEvent.click(button);
        expect(getProjectMock).toHaveBeenCalled();
    });

    it("should call getProject service", () => {
        const getCreditProviderEmailMock = jest.spyOn(CreditService, "getCreditProviderEmail");
        const retireMock = jest.spyOn(UserService, "retire");
        getCreditProviderEmailMock.mockResolvedValue(projectResult);
        retireMock.mockResolvedValue(projectResult);
        const button = screen.getByText(/Retirar/i);

        fireEvent.click(button);
        expect(getCreditProviderEmailMock).toHaveBeenCalled();
    });
});