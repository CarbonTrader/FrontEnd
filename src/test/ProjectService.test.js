import axios from "axios";
import {BASE_API_URL} from "../environment";
import {
    getCreditProvider,
    getOnSaleCredits,
    getOnSaleProvidersCredits,
    getProjects,
    getProviderEmail
} from "../services/projectService";

jest.mock("axios");

describe("ProjectService", () => {
    it("should call getProjects", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getProjects();

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/projects/all`);
        expect(result).toEqual({});
    });

    it("should call getCreditProvider", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getCreditProvider(1);

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/projects/credit_provider/1`);
        expect(result).toEqual({});
    });

    it("should call getOnSaleCredits", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getOnSaleCredits(1);

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/projects/onSaleCredits/1`);
        expect(result).toEqual({data:{}});
    });

    it("should call getOnSaleProvidersCredits", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getOnSaleProvidersCredits(1);

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/projects/onSaleCredits/provider/1`);
        expect(result).toEqual({data:{}});
    });

    it("should call getProviderEmail", async () => {
        axios.get.mockResolvedValueOnce({data: {}});

        const result = await getProviderEmail("test");

        expect(axios.get).toHaveBeenCalledWith(`${BASE_API_URL}/projects/provider_email/test`);
        expect(result).toEqual({data:{}});
    });
});