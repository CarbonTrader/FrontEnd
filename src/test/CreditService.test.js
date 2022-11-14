import axios from "axios";
import {BASE_API_URL} from "../environment";
import {getCreditProviderEmail, getProject} from "../services/CreditService";

jest.mock("axios");

describe("CreditService", () => {
    it("should call getCreditProviderEmail", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getCreditProviderEmail('test');

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/credits/provider_email/test`);
        expect(result).toEqual({});
    });

    it("should call getProject", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getProject('test');

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/credits/project/test`);
        expect(result).toEqual({});
    });
});