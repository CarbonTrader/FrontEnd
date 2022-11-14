import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Checkout from "../components/projects/Checkout";
import AppContext from "../context/AppContext";
import * as ProjectService from "../services/projectService";

const appState = {
    state: {
        project: {
            credits: ['credit1']
        }
    },
    changeCurrentHomeTab: jest.fn(),
};

const currentProjectResponse = {
    id: '2',
    credits: [
        {
            price: 50
        }
    ]
};

const renderComponent = () => {

    render(
        <AppContext.Provider value={appState}>
            <BrowserRouter>
                <Checkout/>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

describe("Checkout component", () => {

    let localStorageGetItemMock = null;
    let localStorageSetItemMock = null;

    beforeAll(() => {
        jest.spyOn(ProjectService, "getOnSaleCredits");
        localStorageGetItemMock = jest.spyOn(Storage.prototype, 'getItem')
        localStorageSetItemMock = jest.spyOn(Storage.prototype, 'setItem')
        localStorageGetItemMock.mockReturnValue("{project:{credits:['credit1']}}");
        JSON.parse = jest.fn().mockImplementation(() => currentProjectResponse);
        renderComponent();
    });

    it("should render appropriately", () => {
        expect(screen.getByText(/Cuántos créditos/i)).toBeInTheDocument();
        expect(screen.getByText(/1/i)).toBeInTheDocument();
        expect(screen.getByText(/Precio Unitario/i)).toBeInTheDocument();
        expect(screen.getByText(/50/i)).toBeInTheDocument();
        expect(screen.getByText(/Total/i)).toBeInTheDocument();
        expect(screen.getByText(/comprar créditos/i)).toBeInTheDocument();
        expect(screen.getByText(/Seleccionar seriales/i)).toBeInTheDocument();
    });
});