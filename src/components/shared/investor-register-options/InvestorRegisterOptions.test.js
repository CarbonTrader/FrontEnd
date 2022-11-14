import {unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {render} from "@testing-library/react";
import InvestorRegisterOptions from "./InvestorRegisterOptions";

describe("InvestorRegisterOptions component", () => {

    let container = null;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it("should render appropriately", () => {
        act(() => {
            render(<InvestorRegisterOptions/>, container);
        });

        expect(container).toBeDefined();
    });
});