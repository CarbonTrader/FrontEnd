import {unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {render} from "@testing-library/react";
import CreditProviderRegisterOptions from "../components/shared/cp-register-options/CreditProviderRegisterOptions";

describe("CreditProviderRegisterOptions component", () => {

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
            render(<CreditProviderRegisterOptions/>, container);
        });

        expect(container).toBeDefined();
    });
});