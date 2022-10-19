import {render} from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";
import {act} from "react-dom/test-utils";
import {unmountComponentAtNode} from "react-dom";

describe("LoadingSpinner component", () => {

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
            render(<LoadingSpinner />, container);
        });
        expect(container).toBeDefined();
    });
});